import chalk from "chalk";
import inquirer from "inquirer";
import { getPackages } from "@manypkg/get-packages";
import {$} from 'execa';
import ora from "ora";
import open from "open";
import fs from "fs";
import path from "path";

const githubBaseUrl = 'https://github.com/pedakihq/pedaki';
const packages = await getPackages(process.cwd());
const currentVersion = packages.rootPackage.packageJson.version;

const questions = [
    {
        type: 'list',
        name: 'versionType',
        message: 'What type of version do you want to release?',
        choices: [
            {name: "Don't change", value: 'skip'},
            {name: 'Major', value: 'major'},
            {name: 'Minor', value: 'minor'},
            {name: 'Patch', value: 'patch'},
            {name: "Manual", value: "manual"},
        ],
    },
    {
        type: 'input',
        name: 'version',
        message: 'What version do you want to release?',
        when: (answers) => answers.versionType === 'manual',
    },
    {
        type: 'confirm',
        name: 'preRelease',
        message: 'Is this a pre-release?',
        default: true
    }
];

const nextVersion = (versionType) => {
    const versionParts = currentVersion.split('.');
    const major = parseInt(versionParts[0]) || 0;
    const minor = parseInt(versionParts[1]) || 0;
    const patch = parseInt(versionParts[2]) || 0;

    switch (versionType) {
        case "major":
            return `${major + 1}.0.0`;
        case "minor":
            return `${major}.${minor + 1}.0`;
        case "patch":
            return `${major}.${minor}.${patch + 1}`;
        case "skip":
            return `${major}.${minor}.${patch}`;
        default:
            throw new Error('Invalid version type!');
    }
}

const preReleaseSuffix = (useOld, preRelease) => {
    if (preRelease) {
        const versionParts = currentVersion.split('-', 2);
        if (!useOld || versionParts.length === 1) {
            return '-beta.0';
        }
        const preReleaseParts = versionParts[1].split('.');
        const preReleaseNumber =  (parseInt(preReleaseParts[1]) + 1) || 0;
        return `-beta.${preReleaseNumber}`;
    }
    return '';
}

const updateDependencies = (dependencies, newVersion) => {
    if (!dependencies) return;
    for (const packageName of Object.keys(dependencies)) {
        if (packageName.startsWith('@pedaki')) {
            dependencies[packageName] = newVersion;
        }
    }
    return dependencies;
}

const updatePackageJson = async (newVersion) => {
    const spinner = ora('Updating package.json files...');
    spinner.start();

    const packageJsonFiles = [
        ...packages.packages.map((pkg) => path.join(pkg.dir, 'package.json')),
        path.join(packages.rootPackage.dir, 'package.json')
    ]

    for (const packageJsonFile of packageJsonFiles) {
        console.log(`Updating ${chalk.cyan(path.basename(path.dirname(packageJsonFile)))}...`);
        const packageJson = JSON.parse(fs.readFileSync(packageJsonFile));
        packageJson.version = newVersion;
        packageJson.dependencies = updateDependencies(packageJson.dependencies, newVersion);
        packageJson.devDependencies = updateDependencies(packageJson.devDependencies, newVersion);
        fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 2));
    }

    spinner.succeed();
}

const updateLockFiles = async () => {
    const spinner = ora('Updating lock files...');
    spinner.start();
    await $`pnpm i`;
    spinner.succeed();
}

const openNewTagPage = async (newVersion, preRelease) => {
    const spinner = ora('Opening new tag page...');
    spinner.start();
    await open(`${githubBaseUrl}/releases/new?tag=v${newVersion}&title=v${newVersion}&prerelease=${preRelease}`);
    spinner.succeed();
}

const checkCurrentBranch = async () => {
    const {stdout} = await $`git branch --show-current`;
    const currentBranch = stdout.trim();
    if (currentBranch !== 'main') {
        console.error(`You are on ${chalk.cyan(currentBranch)} branch. Please switch to ${chalk.cyan('main')} branch.`);
        process.exit(1);
    }

    // Check that the branch is clean
    const {stdout: status} = await $`git status --porcelain`;
    if (status.trim() !== '') {
        console.error(`You have uncommitted changes. Please commit or stash them before releasing.`);
        process.exit(1);
    }
}

const commitChanges = async (newVersion) => {
    const spinner = ora('Committing changes...');
    spinner.start();
    await $`git add .`;
    await $`git commit -m ${`v${newVersion}`} --author ${"pedaki-release[bot] <noreply@pedaki.fr>"}`;
    await $`git push origin main`;
    spinner.succeed();
}


await checkCurrentBranch();

inquirer.prompt(questions).then(async (answers) => {
    const {versionType} = answers;
    console.log(`You have selected to release a ${chalk.cyan(versionType)} version.`);
    let newVersion = answers.version || nextVersion(versionType);
    newVersion += preReleaseSuffix(answers.versionType === 'skip', answers.preRelease);
    console.log(`The new version will be ${chalk.cyan(newVersion)}.`);
    await updatePackageJson(newVersion);
    await updateLockFiles();
    await commitChanges(newVersion);
    await openNewTagPage(newVersion, answers.preRelease);
});


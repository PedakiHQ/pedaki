import chalk from "chalk";
import inquirer from "inquirer";
import package_json from '../package.json' assert {type: 'json'};
import fs from 'fs';
import path from 'path';
import {$} from 'execa';
import ora from "ora";

const __dirname = path.resolve();

const questions = [
    {
        type: 'list',
        name: 'versionType',
        message: 'What type of version do you want to release?',
        choices: [
            {name: 'Major', value: 'major'},
            {name: 'Minor', value: 'minor'},
            {name: 'Patch', value: 'patch'},
            {name: "Skip", value: "skip"},
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
        message: 'Is this a pre-release?)',
        default: false,
    }
];

const nextVersion = (versionType) => {
    const currentVersion = package_json.version;
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

const preReleaseSuffix = (preRelease) => {
    if (preRelease) {
        const currentVersion = package_json.version;
        const versionParts = currentVersion.split('-', 2);
        const preReleaseNumber = versionParts.length === 2 ? parseInt(versionParts[1]) + 1 : 0;
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

    const {stdout, command} = await $`find . -name package.json \
        -not -path **/node_modules/** \
        -not -path **/.next/** \
        -not -path **/.yalc/** \
        -not -path **/.react-email/** \
    `;
    const packageJsonFiles = stdout.split('\n');

    for (const packageJsonFile of packageJsonFiles) {
        console.log(`Updating ${chalk.cyan(packageJsonFile)}...`);
        const packageJsonPath = path.join(__dirname, packageJsonFile);
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
        packageJson.version = newVersion;
        packageJson.dependencies = updateDependencies(packageJson.dependencies, newVersion);
        packageJson.devDependencies = updateDependencies(packageJson.devDependencies, newVersion);
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    }

    spinner.succeed();
}

const updateLockFiles = async () => {
    const spinner = ora('Updating lock files...');
    spinner.start();
    await $`pnpm i`;
    spinner.succeed();
}

inquirer.prompt(questions).then(async (answers) => {
    const {versionType} = answers;
    console.log(`You have selected to release a ${chalk.cyan(versionType)} version.`);
    let newVersion = answers.version || nextVersion(versionType);
    newVersion += preReleaseSuffix(answers.preRelease);
    console.log(`The new version will be ${chalk.cyan(newVersion)}.`);
    await updatePackageJson(newVersion);
    await updateLockFiles();
});


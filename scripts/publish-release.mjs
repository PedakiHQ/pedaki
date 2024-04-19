import throat from "throat";
import { getPackages } from "@manypkg/get-packages";
import { $ } from "execa";

const packages = await getPackages(process.cwd());
const isBeta = packages.rootPackage.packageJson.version.includes('-beta');
const version = packages.rootPackage.packageJson.version;

/**
 * @param {Package} pkg
 */
const publishPackage = async (pkg) => {
    const packageJson = pkg.packageJson;
    if (packageJson.private) {
        console.log(`Skipping ${packageJson.name}...`);
        return;
    }

    console.log(`Publishing ${packageJson.name}...`);
    const result = await $({ cwd: pkg.dir })`pnpm publish --access public --tag ${isBeta ? 'beta' : 'latest'} --no-git-checks`;
    console.log({ result });
    console.log(`Published ${packageJson.name}.`);
}

if (process.argv.length > 2) {
    const only_package = process.argv[2];
    const pkg = packages.packages.find(pkg => pkg.packageJson.name === only_package);
    if (pkg) {
        await publishPackage(pkg);
    } else {
        throw new Error(`Package ${only_package} not found!, available packages: ${packages.packages.map(pkg => pkg.packageJson.name).join(', ')}`);
    }
}
else {
    // Check that ll packages have the same version
    if (packages.packages.filter(pkg => pkg.packageJson.version !== version).length > 0) {
        // throw new Error('Not all packages have the same version!');
    }

    console.log(`Publishing packages with version ${version}... (isBeta: ${isBeta})`);

    await Promise.all(packages.packages.map(throat(2, (pkg) => publishPackage(pkg))));
}

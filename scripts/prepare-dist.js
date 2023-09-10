const fs = require('fs-extra');

const distFolder = 'dist';

const npmIgnore = fs.readFileSync('.npmignore', 'utf8');
const ignoredPatterns = npmIgnore.split('\n').filter((line) => line !== '' && !line.startsWith('#'));
const defaultPatterns = ['.git', '.npmignore', 'package-lock.json', 'node_modules', distFolder];
ignoredPatterns.push(...defaultPatterns);

const copy = (src, dest) => {
    if (fs.existsSync(src)) {
        fs.copySync(src, dest);
        console.log(`Copied ${src} to ${dest}`);
    }
}

const copyAll = (src, dest) => {
    fs.readdirSync(src).forEach((file) => {
        const srcFile = `${src}/${file}`;
        const destFile = `${dest}/${file}`;
        if (!ignoredPatterns.some((pattern) => srcFile.includes(pattern))) {
            copy(srcFile, destFile);
        }
    });
}

copyAll('.', distFolder);


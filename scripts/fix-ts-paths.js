const fs = require('fs');
const path = require('path');

const outDir = path.join('dist');

const walkSync = (dir, filelist) => {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        try {
            filelist = walkSync(dirFile, filelist);
        } catch (err) {
            if (err.code === 'ENOTDIR' || err.code === 'EBUSY') filelist = [...filelist, dirFile];
            else throw err;
        }
    });
    return filelist;
}

const pattern = /(?:import|export)\s+.*\s+from\s+['"](.*)\.(tsx?)['"]/g;

const transformFile = (file) => {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(pattern);

if (!matches) return;

    const newContent = content.replace(pattern, (match, p1, p2) => {
        console.log(`Transforming ${p1}.${p2} to ${p1}.js`)
        return match.replace(`${p1}.${p2}`, `${p1}.js`);
    });

    fs.writeFileSync(file, newContent, 'utf8');
}

const files = walkSync(outDir, []);


files.forEach(file => {
    // Keep only js files
    if (!file.endsWith('.js')) return;
    transformFile(file);

})


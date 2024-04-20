const fs = require("fs-extra");
const path = require("node:path");

const distFolder = "dist";
const srcFolder = "src";

const listFiles = (dir) => {
	const files = fs.readdirSync(dir);
	return files.flatMap((file) => {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);
		if (stat.isDirectory()) {
			return listFiles(filePath);
		}

		// keep only js files
		if (!filePath.endsWith(".js")) {
			return [];
		}
		return [filePath];
	});
};

const files = listFiles(distFolder);
for (const file of files) {
	let found = false;
	const extensions = [".ts", ".tsx"];
	for (const ext of extensions) {
		if (found) break;

		const srcFile = file.replace(distFolder, srcFolder).replace(".js", ext);
		if (fs.existsSync(srcFile)) {
			const srcContent = fs.readFileSync(srcFile, "utf8");
			const distContent = fs.readFileSync(file, "utf8");
			const directive = srcContent.split("\n")[0];
			const matchPattern = ["use client", "use server"];
			if (matchPattern.some((pattern) => directive.includes(pattern))) {
				console.log(`Adding ${directive} in ${file}`);
				fs.writeFileSync(file, `${directive}\n${distContent}`);
			}
			found = true;
		}
	}

	if (!found) {
		console.log(`No source file found for ${file}`);
	}
}

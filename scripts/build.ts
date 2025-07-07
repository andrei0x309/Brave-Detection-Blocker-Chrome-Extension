import { extensionPaths } from "./constants";
import fs from 'fs';

const buildDist = () => {
    const time = performance.now();
    // delete all files in dist folder
    fs.rmSync('dist', { recursive: true, force: true });

    // create dist folder
    fs.mkdirSync('dist');

    // owverwite files from extensionPaths.dirs in dist folder recursively
    for (const dir of extensionPaths.dirs) {
        fs.cpSync(dir, `dist/${dir}`, { recursive: true });
    }
    // overwite files from extensionPaths.files in dist folder
    for (const file of extensionPaths.files) {
        fs.cpSync(file, `dist/${file}`, { recursive: false });
    }

    console.log('Extension built successfully in', (performance.now() - time).toFixed(0), 'ms');
}

buildDist();
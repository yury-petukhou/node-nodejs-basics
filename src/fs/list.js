import path from 'path';
import {promises as fs} from 'fs';

const list = async (pathToDir) => {
    // Write your code here 
try {
    const files = await fs.readdir(pathToDir);
    console.log(files);
    return files;
} catch (error) {

    if (error.code === 'ENOENT') {
        throw new Error('FS operation failed');
    }

    console.error(`list failed: ${error}`);
    throw error;
}
};
const pathToDir = path.join('fs/files');
await list(pathToDir);
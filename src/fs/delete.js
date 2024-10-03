import {promises as fs} from 'fs';
import path from 'path';
const remove = async (file) => {
    // Write your code here 

    try {
        await fs.access(file);
        await fs.unlink(file);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            console.error(`delete failed: ${err}`);
            throw err;
        }
    }
};

const pathToDelete = path.join('fs/files', 'fileToRemove.txt');
await remove(pathToDelete);
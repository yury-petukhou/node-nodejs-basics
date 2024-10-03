import {promises as fs} from 'fs';
import path from 'path';

const read = async (file, format) => {
    // Write your code here 
    try {
       const content = await fs.readFile(file,format);
        console.log(content);
        return content;
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        console.error(`read failed: ${error}`);
    }
};
const pathToFile = path.join('fs/files', 'fileToRead.txt');
await read(pathToFile, 'utf8');
import { promises as fs } from 'fs';
import path from 'path';

const rename = async (from, to) => {
    // Write your code here 
    const directory = path.dirname(from);
    try {

       try {
        await fs.access(from);
        console.log('File found', from);
       } catch (error) {
         throw new Error('FS operation failed');
       } 

       try {
        await fs.access(to);
        throw new Error('FS operation failed');
       } catch (error) {
            if(error.code === 'ENOENT') {
                await fs.rename(from, to);
                console.log('File renamed successfully',from, "-->", to);
            } else {
                throw new Error('FS operation failed');
            }
       } 
    } catch (error) {
        throw new Error('FS operation failed');
    }
};
const oldPath =  'fs/files/wrongFilename.txt';
const newPath = 'fs/files/properFilename.md';
await rename(oldPath, newPath);
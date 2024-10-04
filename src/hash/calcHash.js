import { open } from 'fs/promises';
import { pipeline } from 'stream/promises';
import crypto from 'crypto';

const calculateHash = async (filePath) => {
    let fileHandle;
    
    // Write your code here 
    try {
        fileHandle = await open(filePath, 'r');
        const readStream = fileHandle.createReadStream();
        const hash = crypto.createHash('sha256');
        await pipeline(readStream, hash)
        console.log(hash.digest('hex')) 
    }  finally {
        if (fileHandle) await fileHandle.close();
    }
};

await calculateHash('hash/files/fileToCalculateHashFor.txt');
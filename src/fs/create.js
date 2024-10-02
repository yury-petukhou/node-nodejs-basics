import { promises as fs } from 'fs';
import path from 'path';

const create = async () => {
    const directoryPath = 'files';
    const fileName = 'fresh.txt';
    const fullPath = path.join(directoryPath, fileName);

    try {
        await fs.access(fullPath);
        throw new Error('FS operation failed');
    } catch (error) {
       
        if(error.code === 'ENOENT') {
            try {
                await fs.writeFile(fullPath, 'I am fresh and young');
                console.log('File created successfully');
            } catch (writeErr) {
                console.error('Failed to create file:', writeErr);
            }
        
        }  else {
            throw new Error('FS operation failed');
        }

  };

}


await create()
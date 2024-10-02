import { promises as fs } from 'fs';
import path from 'path';

const copy = async (source, dest) => {

  
    // Write your code here 
    try {
        await fs.access(dest);
        throw new Error('FS operation failed');
    } catch (error) {
        if(error.code === 'ENOENT') {
            try {
                await fs.mkdir(dest, { recursive: true });
                console.log('Folder created successfully', dest);
                const files = await fs.readdir(source, { withFileTypes: true });
                
                for (const entry of files) {   
                    const sourcePath = path.join(source, entry.name);
                    let destPath = path.join(dest, entry.name);

                    if(entry.isDirectory()){
                        await copy(sourcePath, destPath);
                    } else {
                        await fs.copyFile(sourcePath, destPath);
                    }     
                  
                }
            } catch (writeErr) {
                console.error('Failed to create folder:', writeErr);
            }
        
        }  else {
            throw new Error('FS operation failed');
        }

  };

};
 
await copy('fs/files', 'fs/files_copy');

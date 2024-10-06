import { createReadStream } from 'fs';
const read = async (path) => {
    // Write your code here
    const readStream =  createReadStream(path);
    let result = '';
 
    readStream.on('data', (chunk) => {
     result += chunk;
    });
    
    readStream.on('end', () => {
        console.log('--- got all data of file ---');
        process.stdout.write(result)
    });

    readStream.on('error', (error) => {
      console.log(error);
    });

  
};

const pathToFile = 'streams/files/fileToRead.txt';
await read(pathToFile);
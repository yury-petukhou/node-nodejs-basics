import { createWriteStream } from 'fs';

const write = async (path) => {
    // Write your code here 
    const writeStream = createWriteStream(path);
    let result = ''
    console.log("Enter the text (Ctrl+D to finish):");

    process.stdin.on('data', (chunk) => {
        result += chunk.toString().trim()
    });

    process.stdin.on('end', () => {
        console.log('--- Enter is  done ---');
        writeStream.write(result)
        writeStream.end();

        writeStream.on('finish', () => {
            console.log('Writting is  done.');
        });
    
        writeStream.on('error', (error) => {
            console.error('Writting error:', error);
        });
    });
    
};
 
const pathToWriteFile = 'streams/files/fileToWrite.txt';
await write(pathToWriteFile);
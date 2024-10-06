import fs from 'fs';
import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const readFromStdin = () => {
    console.log("Enter the text (Ctrl+D to finish):");

    return process.stdin;
};

const transform = async  (modificator) => {
    // Write your code here 
    try {
        await pipeline(
            readFromStdin(),
            new Transform({
                transform(chunk, encoding, callback){
                    const result =  modificator ? modificator(chunk.toString()) : chunk.toString()
                    this.push(result);
                    callback()
                }
            }),
            new Transform({
                transform(chunk, encoding, callback) {
                    // Add the new line 
                    this.push(chunk + '\n');
                    callback();
                }
            }),
            process.stdout
        )
    } catch (error) {
        throw new Error(error)
    } finally {
        process.exit();
    }
};

await transform((v) => v.split('').reverse().join(''));
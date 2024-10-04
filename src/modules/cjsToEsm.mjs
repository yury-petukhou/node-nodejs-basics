 
import  { release, version } from 'os';
import { createServer  } from 'http';
import { fileURLToPath } from 'url';
import { dirname, sep } from 'path';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import './files/c.js';

async function loadJsonModule(path) {
    try {
        const jsonModule = await await readFile(new URL(path, import.meta.url));;
        return JSON.parse(jsonModule);
    } catch (error) {
        throw error;
    }
}


const init = async () => {
    try {
        const random = Math.random();
        const pathProp = random > 0.5 ? './files/a.json' : './files/b.json';
        const unknownObject = await loadJsonModule(pathProp) 

        console.log(`Release ${release()}`);
        console.log(`Version ${version()}`);
        console.log(`Path segment separator is "${sep}"`);
        
        console.log(`Path to current file is ${__filename}`);
        console.log(`Path to current directory is ${__dirname}`);
        
        const myServer = createServer((_, res) => {
            res.end('Request accepted');
        });
        
        const PORT = 3000;
        
        console.log(unknownObject, 'unknownObject');
        
        myServer.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
            console.log('To terminate it, use Ctrl+C combination');
        });

        return  {
            unknownObject,
            myServer,
        };

    } catch (error) {
        console.error('Error initializing server:', error);
        throw error;
    }
  
}


export default init()

const parseArgs = () => {
    // Write your code here 
   let args = ''
   process.argv.slice(2).forEach(arg => {
        if (arg.startsWith('--')) {
            args += `${arg.slice(2)} is ${process.argv[process.argv.indexOf(arg) + 1]} `
        }
    });

    console.log(args)
};

parseArgs();
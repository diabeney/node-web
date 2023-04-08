const { join } = require('path')
const args = {
    '-r': readfile,
    '-h': displayHelp, 
}

const yargs = process.argv.slice(2);

function readfile(file) {
    console.log('Reading: ', file);
    const filename = file ? join(__dirname, file) : __filename;
    require('fs').createReadStream(filename).pipe(process.stdout);
}

function displayHelp() {
    console.log('Argument processor: ', args);
}

if(yargs.length) {
    yargs.forEach((arg, index) => {
        const feature = Object.keys(args).find(item => item === arg);
        if(feature) {
            args[feature].apply(this, yargs.slice(index + 1));
        }
    });
}

// console.log('Specify argument');

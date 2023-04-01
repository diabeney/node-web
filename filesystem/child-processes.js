const { exec } = require('child_process');
let dir = __dirname;
let cmdComand = `code ${dir}`;

// exec(cmdComand);

function logError(err) {
    if(err instanceof Error) {
        console.error(err.message);
        return;
    }  else {
        console.error('Error: ', err);
        return;
    }
}

exec('ls -lh', (error, stdout, stderr) => {
    if(error) logError(error);
    if(stderr) logError(stderr);
    console.log('stdou ', stdout);
})

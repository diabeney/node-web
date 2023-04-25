const { exec, execFile } = require('child_process');
const target = process.argv.slice(2).join(' ');
let dir = __dirname;
let cmdComand = `start ${target}`;

exec(cmdComand);

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

execFile('hello.bat',['diabene'] ,(err, stdout) => {
    console.log(stdout);
})



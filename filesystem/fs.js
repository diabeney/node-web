const fs = require('fs');
const path = require('path');

// The fs.Stats class can be used to check if a file exists

fs.writeFile('./demo.txt', 'Destiny arrives all the same.', (err) => {
    if(err) console.log(err);
})

fs.readdir('./', (err, files) => {
    if(err) return console.error('Something went wrong..');
    for(let file of files) {
        console.log(file);
        if(path.extname(file) === '.ts') { // checking the extension of the file
            console.log('removing: ', file);
            fs.unlink('./' + file, (err) => {
                if(err) console.log(err);
            });
        }
    }
})
// File streams
fs.open('./os.js','a', (err, fd) => {
    if(err) return console.error(err);
    const writable = fs.createWriteStream(null, {fd: fd,start: 0,defaultEncoding: 'utf8'});
    writable.write(`import react from 'react'`)
})



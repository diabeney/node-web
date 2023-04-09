const fs = require('fs');

fs.readFile('./names.txt' , (err, data) => {
    if(err) return console.log(err);
    console.log(data.toString('utf-8'))
})
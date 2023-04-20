const fs = require('fs');
const { join } = require('path');

exports.findSync = function(regExp, startPath) {
    const results = [];

    function finder(path) {
        const files = fs.readdirSync(path);
        for(let i = 0;i< files.length;i++) {
            const fpath = join(path, files[i]);
            const fstats  = fs.statSync(fpath);
            if(fstats.isDirectory()) finder(fpath);
            if(fstats.isFile() && regExp.test(files[i])) results.push(fpath);
        }
    }

    finder(startPath);
    return results;
}
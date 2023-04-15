const http = require('http');
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-encoding': 'gzip'});
    fs.createReadStream(path.join(__dirname, 'index.html'))
    .pipe(zlib.createGzip())
    .pipe(res);
})

// server.listen(3000);


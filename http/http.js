const http = require('http');

const server = http.createServer((req, res) => {
    req.setEncoding('utf-8');
    req.on('data', (chunk) => {
        console.log('parsed: ', chunk);
    })
    req.on('end', () => {
        console.log('done parsing');
        res.end();
    })
})


server.listen(3000);
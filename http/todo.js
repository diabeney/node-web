const http = require('http');
const url = require('url');

const TODOS = [];

const server = http.createServer((req, res) => {
    switch(req.method) {
        case 'POST':
            let item = '';
            req.setEncoding('utf-8');
            req.on('data', (chunk) => {
                item += chunk;
            });
            req.on('end', () => {
                TODOS.push(item);
                res.end('OK\n');
            });
            break;
        case 'GET':
            TODOS.forEach((todo, i) => {
                res.write(`${i} ). ${todo}\n`);
            })
            res.end();
            break;
        case 'DELETE':
            const path = url.parse(req.url).pathname;
            const i = parseInt(path.slice(1), 10);
            if(isNaN(i)){
                res.statusCode = 400;
                res.end('Invalid item id');
            } else if(!TODOS[i]) {
                res.statusCode = 404;
                res.end('Item not found');
            } else {
                TODOS.splice(i, 1);
                res.end('OK\n')
            }
            break;
    }
})

server.listen(3000);
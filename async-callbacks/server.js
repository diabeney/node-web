const http = require('http');
const fs = require('fs');
const {join} = require('path')

const filepath = join(__dirname, 'titles.json')

const errFn = (err, response) => {
    console.log(err);
    response.end('Server error')
}


const serverbt = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile(filepath, (err, data) => {
            if(err) return errFn(err, res);
            const titles = JSON.parse(data.toString());
            fs.readFile(join(__dirname, 'template.html'), (err, data) => {
                if(err) return errFn(err, res);
                const tmpl = data.toString();
                const html = tmpl.replace('%', titles.join('</li><li>'));
                res.writeHead(200, {'content-type': 'text/html'});
                res.end(html)
            })
        }
)}});

console.log('server running on localhost:8000')
serverbt.listen(8000, 'localhost');
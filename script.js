const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
                'Contect-Type': 'text/html'
            })
            res.end(data)
        })
    } else if (req.url === '/index2') {
        fs.readFile(path.join(__dirname, 'index2.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
                'Contect-Type': 'text/html'
            })
            res.end(data)
        })
    }
});



server.listen(3000, '127.0.0.1', () => console.log('Сервер работает '));
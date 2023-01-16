const http = require('http');
const fs = require('fs');
const requests = require('requests');

let homeFile = fs.readFileSync('index.html', 'utf-8');


const server = http.createServer((req, res) => {

    if (req.url == '/') {

            res.write(homeFile);
            res.end();

    }
})
server.listen(8000,'127.0.0.1');

const http = require('http');
const url = require('url');
const { exec } = require('child_priocess');

const hostname = '::';
const port = 3000;

const prepareResponse = (req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plan');

    const query = url.parse(req.url, true).query;
    exec(`cowsay ${query.message}\n`, (err, stdout, stderr) => { 'sderr'
        res.end(stdout);
    });
}

const server = http.createServer(prepareResponse);

server.listen(port, hostname)
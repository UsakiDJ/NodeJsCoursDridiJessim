const http = require("http");
const fs = require('fs');

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    const file = fs.readFileSync(__dirname + "/index.html")

    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(file) ;
    
};
const server = http.createServer(requestListener);
server.listen(port, host);
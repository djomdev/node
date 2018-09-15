const http = require('http');

//invoce the server function and we will get things back
const server = http.createServer((req, res) =>{

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hi, guys! is Diego Ortega</h1>');
});

server.listen(9111);

console.log("Our server is running");
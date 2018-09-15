/** Requiring the modules */
const http = require('http');
const fs = require('fs');

/** creating the server */
http.createServer((req, res)=>{
    /** use body variable to */
    let body = '';
    /** Here we are letting the program know that if it detects any get request*/
    if(req.method === 'GET'){

        res.writeHead(200, {'Content-Type': 'text/html'});

        fs.readFile('./http-form.html', 'UTF-8', (err, data)=>{
            if (err) throw err;
            res.write(data);
            res.end();
        });

    }else if(req.method === 'POST'){
        /** here the app will recognize if the user did a post request -- submit data from the form */

        req.on('data', (data)=>{
            body+= data;
        });
        req.on('end', ()=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(body, ()=>{
                res.end();
            });
        });
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 ERROR Could not find the requested page');
    }
}).listen(4444);

console.log('its working');


const http = require('http');
const PORT = 3000;
const url = require('url');
const fs = require('fs'); 
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const req_url = req.url;
    console.log("req_url", req_url);

    const parsed_url = url.parse(req_url);
    
    if (parsed_url.pathname === '/') {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("hello world\n");  
    }
    else if (parsed_url.pathname === '/html') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(fs.readFileSync("./index.html"));
    }
    else if (parsed_url.pathname === '/style.css') {
        res.writeHead(200, {'content-type': 'text/css'});
        res.end(fs.readFileSync("./style.css"));
    }
    else if(parsed_url.pathname === "/submit" && req.method === 'POST'){
        console.log("reached here ..");

        let body ='';
        req.on('data',(chunks)=>{
            console.log("chunks:",chunks);
            body += chunks.toString();
        });

        req.on('end',()=>{
            let datas = querystring.parse(body);
            console.log("datas :",datas);

            console.log("name :",datas.name);
            console.log("email :",datas.email);
            console.log("Password :",datas.password);
        });

        res.writeHead(200, {'content-type':'text/plain'});
        res.end('data send successfully ...');

        
    }
    else {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end('404 Not Found');
    }
});

server.listen(PORT, '127.0.0.1', () => {
    console.log(`listening on http://127.0.0.1:${PORT}`);
});

const createserver = require ('http').createServer;

const server = createserver((req, res) =>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('hello world!\n');
});

server.listen(3000, '127.0.0.1', ()=>{
    console.log('listening on http://127.0.0.1:3000');
});
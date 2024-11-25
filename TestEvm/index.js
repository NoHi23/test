const http = require('http');

const hostname = "localhost";
const port = 8888;
const server = http.createServer((req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end("<h1>Hello Would</h1>");
});

server.listen(port,hostname,()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
})
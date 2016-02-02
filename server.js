'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === '/hello') {
    res.end('<h1>Hello World!</h1>');
  } else if (req.url === '/random') {
    res.end(Math.random().toString());
  } else {
    res.writeHead(403);
    res.end('Access Denied!');
  }

}).listen(PORT, () => {
  console.log(`Node.js server started. Listening on port ${PORT}`);
});

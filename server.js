'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  console.log(req.method, req.url);

  res.end('<h1>Hello World!</h1>');
}).listen(PORT, () => {
  console.log(`Node.js server started. Listening on port ${PORT}`);
});

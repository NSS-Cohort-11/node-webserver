'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === '/hello') {
    const msg = `<h1>Hello World!</h1>
<h2>Goodbye World!</h2>`;

    res.writeHead(200, {
      'Content-Type': 'text/html'
    });

    // chunk response by character
    msg.split('').forEach((char, i) => {
      setTimeout(() => {
        res.write(char);
      }, 1000 * i);
    });

    // wait for all characters to be sent
    setTimeout(() => {
      res.end();
    }, msg.length * 1000 + 2000);
  } else if (req.url === '/random') {
    res.end(Math.random().toString());
  } else {
    res.writeHead(403);
    res.end('Access Denied!');
  }

}).listen(PORT, () => {
  console.log(`Node.js server started. Listening on port ${PORT}`);
});

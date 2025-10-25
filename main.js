const http = require('http');
const router = require('./router');
const { logError } = require('./logHandler');

const PORT = 3000;

const server = http.createServer((req, res) => {
  try {
    router(req, res);
  } catch (err) {
    logError(`Server error: ${err.message}`);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

const http = require('http');
const homeHandler = require('./home');
const postsHandler = require('./posts');
const errorHandler = require('./error');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET') {
    if (url === '/' || url === '/home') {
      homeHandler(req, res);
    } else if (url === '/posts') {
      postsHandler(req, res);
    } else {
      errorHandler(req, res);
    }
  } else {
    errorHandler(req, res);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
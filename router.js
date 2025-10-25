const url = require('url');
const { servePage } = require('./pageHandler');
const { handle404 } = require('./errorHandler');

module.exports = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === '/') {
    servePage('home.html', res, 'Home Page');
  } else if (pathname === '/about') {
    servePage('about.html', res, 'About Page');
  } else {
    handle404(res);
  }
};

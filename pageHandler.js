const fs = require('fs');
const path = require('path');
const { logError } = require('./logHandler');

const servePage = (fileName, res, fallbackMessage) => {
  const filePath = path.join(__dirname, fileName);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      logError(`File not found: ${fileName}`);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`<h1>${fallbackMessage}</h1>`);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
};

module.exports = { servePage };

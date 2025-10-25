const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'error.log');

const logError = (message) => {
  const logEntry = `${new Date().toISOString()} - ${message}\n`;
  fs.appendFile(logFile, logEntry, (err) => {
    if (err) console.error('Error writing to log file:', err);
  });
};

module.exports = { logError };

// logger.js

const fs = require('fs');
const moment = require('moment');

const logMessage = (message) => {
  const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  const formattedMessage = `[${timestamp}] ${message}\n`;

  fs.appendFile('logs.txt', formattedMessage, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
};

module.exports = {
  logMessage,
};
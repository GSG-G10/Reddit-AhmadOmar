const { join } = require('path');

const notFoundError = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', '404.html'));
};

// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', '..', 'public', '500.html'));
};

module.exports = { notFoundError, serverError };

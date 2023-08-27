module.exports = {
  resolve: {
    fallback: {
      "fs": false,
      "os": false,
      "net": false,
      "tls": false,
      "path": false,
      "crypto": false,
      "stream": false
    }
  }
};

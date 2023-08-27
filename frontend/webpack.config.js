module.exports = {
  resolve: {
    fallback: {
      "fs": false,
      "os": false,
      "net": false,
      "tls": false,
      "path": false,
      "crypto": require.resolve("crypto-browserify")
      "stream": false
    }
  }
};

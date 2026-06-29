const http = require("http");

function add(a, b) {
  return a + b;
}

const server = http.createServer((req, res) => {
  res.end("Hello DevOps!");
});

if (require.main === module) {
  server.listen(3000);
}

module.exports = { add };
const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    serveFile("index.html", res);
  } else if (req.url === "/about") {
    serveFile("about.html", res);
  } else if (req.url === "/contact-me") {
    serveFile("contact-me.html", res);
  } else {
    serveFile("404.html", res);
  }
});

function serveFile(fileName, res) {
  const filePath = path.join(__dirname, fileName);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

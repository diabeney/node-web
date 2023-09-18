const http = require("http");
const qs = require("querystring");
const ITEMS = [];

function show(res) {
  const html = `<html><head><title>Diabene Yaw Tm</title></head><body><h1>Todo List Items</h1><ul>${ITEMS.map(
    (item) => {
      return `<li>${item}</li>`;
    }
  ).join(
    ""
  )}</ul><form method="post" action="/" ><input type="text" name = "item"/><input type="submit" value="Add Item" /></form></body></html>`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", Buffer.byteLength(html));
  res.end(html);
}

function add(req, res) {
  let body = "";
  req.setEncoding("utf-8");
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", () => {
    const obj = qs.parse(body);
    console.log(obj);
    ITEMS.push(obj.item);
    show(res);
  });
}

function badRequest(res) {
  res.statusCode = 400;
  res.setHeader("Content-Type", "text/plain");
  res.end("Bad Request");
}

function notFound(res) {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  res.end("Not Found");
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    switch (req.method) {
      case "GET":
        show(res);
        break;
      case "POST":
        add(req, res);
        break;
      default:
        badRequest(res);
    }
  } else {
    notFound(res);
  }
});

server.listen(3000);

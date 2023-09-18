const http = require("http");
const formidable = require("formidable");

function show(req, res) {
  const html = `<html><body><form method="post" action="/" enctype="multipart/form-data" ><input type="text" name="name" /><input type="file" name="file" /><input type="submit" value="Upload" /></form></body></html>`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", Buffer.byteLength(html));
  res.end(html);
}

function isFormData(req) {
  const type = req.headers["content-type"] || "";
  return type.indexOf("multipart/form-data") === 0;
}
function upload(req, res) {
  if (!isFormData(req)) {
    res.statusCode = 400;
    res.end("Bad request");
    return;
  }
  const form = new formidable.IncomingForm();
  form.on("field", (name, value) => {
    console.log(name);
    console.log(value);
  });
  form.on("file", (formName, file) => {
    console.log(formName);
    console.log(file);
  });
  form.on("end", () => {
    res.end("Upload complete");
  });
  form.parse(req);
}

const server = http.createServer((req, res) => {
  switch (req.method) {
    case "GET":
      show(req, res);
      break;
    case "POST":
      upload(req, res);
      break;
  }
});

server.listen(3000);

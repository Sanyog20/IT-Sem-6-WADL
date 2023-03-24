const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".txt": "text/plain",
};

const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url);

  // If requested url is "/"
  if (parsedUrl.pathname === "/") {
    var filesLink = "<ul>";
    res.setHeader("Content-type", "text/html");
    var filesList = fs.readdirSync("./");
    filesList.forEach((element) => {
      if (fs.statSync("./" + element).isFile()) {
        filesLink += `<br/><li style="color:red" ><a href='./${element}'>${element}</a></li>`;
      }
    });
    filesLink += "</ul>";
    res.end("<h1>List of Files : </h1> " + filesLink);
  } else {
    // Get the path name and preprocess it
    let pathname = parsedUrl.pathname;
    pathname = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, "");

    if (pathname == "/") {
      pathname = "/index.html";
    }

    // Get the corresponding file path
    const filePath = path.join(process.cwd(), pathname);
    // Read the file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("File not found");
        res.end();
      } else {
        // Get the MIME type based on the file extension
        const extname = path.extname(filePath);
        const mimeType = mimeTypes[extname] || "application/octet-stream";
        // Set the Content-Type header
        res.setHeader("Content-Type", mimeType);
        // Write the file data to the response
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
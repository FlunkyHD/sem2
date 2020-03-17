const { createServer } = require("http");
const fs = require("fs");
const { path } = require("path");

let server = createServer((request, response) => {
    let file = fs.createReadStream('spy.html');
    file.pipe(response);

});
server.listen(8000);
console.log("Listening! (port 8000)");
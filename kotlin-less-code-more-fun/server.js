const http = require('http');

const finalHandler = require('finalhandler');
const serveStatic = require('serve-static');

const serve = serveStatic("./");

const server = http.createServer(function (req, res) {
    const done = finalHandler(req, res);
    serve(req, res, done);
});

const port = process.env.PORT || 8080;
server.listen(port);
console.log("Server started on port " + port);
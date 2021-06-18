const http = require('http');

const finalHandler = require('finalhandler');
const serveStatic = require('serve-static');

const serve = serveStatic("./");

const server = http.createServer((req, res) => {
    const done = finalHandler(req, res);
    serve(req, res, done);
});

const port = process.env.PORT || 8023;
server.listen(port);
console.log(`Server started on port ${port}`);
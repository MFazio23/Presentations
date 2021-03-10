var http = require('http');

var finalHandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./");

var server = http.createServer(function(req, res) {
    var done = finalHandler(req, res);
    serve(req, res, done);
});

var port = process.env.PORT || 8080;
server.listen(port);
console.log("Server started on port " + port);
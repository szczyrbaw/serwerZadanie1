var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/url') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            response.write(data);
            response.end();
        });            
    } else {
            fs.readFile('./cat.jpg', function (err, data) {
              response.statusCode = 404;
              response.write('<img src="https://i.ytimg.com/vi/BjChPYhfucg/maxresdefault.jpg">');
              response.end();
            })
            
    }
});

server.listen(9000);
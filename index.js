var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/url') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {            
            response.write('<head>' +
              '<meta charset="utf-8">' +
                '<title>Mój serwer</title>' +
                '<link rel="stylesheet" href="">' +
              '</head>' +
              '<body>' +
                '<article>' +
                  '<h1>'+ data +'</h1>' +
                '</article>' +
              '</body>' +
              '<footer>' +
                '<p></p>' +
              '</footer>'
            )
           response.end();
        });
          
    } else {
        fs.readFile('404.jpg', function (err, data) {
              response.setHeader("Content-Type", "image/jpeg");
              /*response.write("<div>");
              
              response.write(data);
              
              response.write("</div>");
              response.statusCode = 404;*/
              
              response.end(data);
            })    
    }
});

server.listen(9000);
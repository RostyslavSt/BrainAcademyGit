var http = require ('http');

var server = http.createServer(function(req, res){   //require, request создали сервер. функция колбэк
//console.log('got a request'); //answer from server
console.log(req.method);
console.log(req.url);
console.log(req.headers);

res.statusCode = 404; //not found

res.setHeader('Content-Type', 'application/json');
res.setHeader('Set-Cookie', 'sampleCookie=10');
res.write('<h1> hello world!</h1>');

res.end(); // конец обработки запроса

});


server.listen(8000); //for start server, 8000 port of server
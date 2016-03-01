var Hapi = require('hapi'); //подключили библиотку хапи
var fs = require('fs'); // мудль для 

var server = new Hapi.Server(); // создали сервер
server.register(require('inert'));
server.connection({   // конфигурация соединения с сревкром
host: 'localhost',
port: 8000
});

server.route({
	method: 'GET',
	path: '/{param*}',
	handler: {
		directory: {
			path: 'public',
			index: true //если не поставить то вернет список файлов
		}

	}
});


server.route({
method: 'GET',
path: '/json',
handler: function(request, reply) {
	reply(fs.createReadStream('./data.json'));
}
});

server.route({
method: 'GET',
path: '/hello',
handler: function(request, reply) {
	reply([1, 4, 45, 'ddddd']);
}
});


server.start(function() {
	console.log('Server started');
});
var qs = require('querystring');

var url = require('url');

var http = require('http');
 
var port = 8888;
 
var s = http.createServer();

s.on('request', function(request, response) {
	response.writeHead(200);
	console.log(request.method);
	console.log(request.headers);
	console.log(request.url);

	if(request.method=='POST') {

		var data = '';
		request.on('data', function(chunk) {
			data += chunk.toString();
		});
			request.on('end', function() {
				var POST =  qs.parse(data);
				console.log(POST);
		});
	}

	if (data!==undefined) {
		console.log(data);
	}
	else {
		console.log('no_data_sended_by_get_request');
	}

	var url_parts = url.parse(request.url,true);
	console.log('\r\n');
	console.log('url_parts.query');
	console.log('\r\n');
	console.log(url_parts.query);
	console.log('\r\n');

	response.write('hi');
	response.end();
	process.exit()
});
 
s.listen(port);

console.log('Browse to http://127.0.0.1:' + port);
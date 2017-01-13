var http = require('http')

requestHandler = function(req,res) {
	//console.log('Inside handler');
	console.log(req.url);
	if(req.url == '/'){
		res.end('hi')
	}
	else{
		res.end('hello')
	}

}

var server = http.createServer(requestHandler);

server.listen(8000,function(){
	console.log('Started server on port 3000');
})
var http = require('http')
var randomNumber = require('./random_number.js')
requestHandler = function(req,res) {
	//console.log('Inside handler');
	if(req.url == '/'){
		result = randomNumber()
		console.log(result)
		res.end(result + " ")
		
	}
	else{
		res.end('hello')
	}

}

var server = http.createServer(requestHandler);

server.listen(7000,function(){
	console.log('Started server on port 7000');
})
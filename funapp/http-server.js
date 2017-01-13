var http = require('http')
var randomNumber = require('./random_number.js')
requestHandler = function(req,res) {
	//console.log('Inside handler');
	if(req.url == '/'){
		console.log(randomNumber() + " " + randomNumber() + " " + randomNumber() )
		//res.end(result + " ")
		res.end(randomNumber() + " " + randomNumber() + " " + randomNumber() )
		
	}
	else{
		res.end('hello')
	}

}

var server = http.createServer(requestHandler);

server.listen(7001,function(){
	console.log('Started server on port 7001');
})
var http = require('http')
var mustache = require('mustache')

requestHandler = function(req,res) {
	//console.log('Inside handler');
	console.log(req.url);
	if(req.url == '/'){
		//res.end('hi')
		result = mustache.render("Hello {{first_name}} {{last_name}}",
		{
			"first_name": "Kartik",
			"last_name": "Satoskar"
		}
		)
		console.log(result)
	}
	else{
		res.end('hello')
	}

}

var server = http.createServer(requestHandler);

server.listen(5000,function(){
	console.log('Started server on port 5000');
})

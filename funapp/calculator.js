var http = require('http');
var call_request = require('./method.js');
requestHandler = function(request,result) {
	var url = request.url;
	if(url[0] == '/'){
			
		if(url[1]!='f') {
			var splits = url.substring(1).split("&");
			var answer = call_request(parseInt(splits[0]), parseInt(splits[1]),splits[2]);
			console.log("safe")
			console.log(answer)
			result.end(""+answer);
		}
		
	}	
}

var server = http.createServer(requestHandler);

server.listen(7004,function(){
	console.log('Started server on port 7004');
})
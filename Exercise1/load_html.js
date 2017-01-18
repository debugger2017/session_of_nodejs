var http = require('http');
var fs = require('fs');
var call_request = require('./method.js');
var url = ""
var num1=0,num2=0,op="";
var answer=0;
fs.readFile('./interface.html', function (err, html) {
    if (err) {
        throw err; 
    }       

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        //response.end();
        url = request.url;
        console.log(url)  
        if(url[1] == '?') {
        	var splits = url.substring(2).split("&")
        	console.log(splits)
        	for (var i=0;i<splits.length;i++) {
        		var tmp = splits[i].split("=")
        		console.log(tmp)
        		switch(i){
        			case 0:
        					num1 = tmp[1];
        					break;
        			case 1:
        					num2 = tmp[1];
        					break;
        			case 2:
        					op = tmp[1];
        					break;				
        		}
        	}
        	console.log(num1+""+num2+""+op);
        	answer = call_request(parseInt(num1), parseInt(num2),op);
     		console.log(answer);  	
        	response.end(answer+"");
        }
    }).listen(7005);
}); 
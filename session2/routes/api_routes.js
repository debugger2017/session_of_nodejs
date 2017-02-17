var express = require("express");
var appRouter = express.Router();
var call_request = require('/home/debugger2017/Idyllic/session_of_nodejs/session2/method.js');

appRouter.get('/', function(req, res) {
	var num1=0,num2=0,op="";
	var answer=0;
	var url = req.url;
	if(url[1] == '?') {
    	var splits = url.substring(2).split("&")
    	console.log(splits);
    	for (var i=0;i<splits.length;i++) {
    		var tmp = splits[i].split("=")
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

    	answer = call_request(parseInt(num1),parseInt(num2),op);
  		console.log(answer+"");  		
    }
  res.render('index', { answer: answer });
});

module.exports = appRouter;


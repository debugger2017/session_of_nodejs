var express = require('express')
var path = require('path')
var app = express();
var express = require("express");
var path = require("path");
var call_request = require('./method.js');

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");


app.get('/', function(req, res) {
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
app.listen(4066);
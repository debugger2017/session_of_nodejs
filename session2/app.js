var express = require('express')
var path = require('path')
var app = express();

var publicPath = path.resolve(__dirname, 'public');

app.use(static(publicPath));

app.use(function(req,res,next){
	console.log("Inside a middleware" + req.url);
	next();
})

app.use(function(req,res){
	req.status(200).send('File not found')
})

app.listen(3007);
var express = require('express')
var path = require('path')
var app = express();

var publicPath = path.resolve(__dirname, 'public');

app.get('/users/:username', function(req,res){
	res.end("Hello ", req.params.username);
});
app.use()
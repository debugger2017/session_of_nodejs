var express = require('express')
var path = require('path')
var app = express();

var publicPath = path.resolve(__dirname, 'public');

app.use(function(req, res,next){
	if(req.ip = '::ffff:127.0.0.1')
		res.status(404).send('Blocked')
	else
		next();
});

app.use(function(req, res){
	res.status(200).send('OKKK')
});
app.listen(3008);
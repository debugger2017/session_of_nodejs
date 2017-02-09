var express = require('express')
var path = require('path')
var app = express();

app.set("view engine" , "ejs");
app.set("views",path.resolve(__dirname,"views"));

app.get("/",function(req,res) {
	res.render("index", {
        message: "Rendered index page"
    });
});

app.listen(4059);
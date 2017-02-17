var express = require('express')
var path = require('path')
var app = express();
var express = require("express");
var path = require("path");

var appRouter = require("./routes/api_routes")

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use("/api", appRouter);

app.listen(4066);
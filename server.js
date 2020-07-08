// Dependencies 
var exphbs = require("express-handlebars");
var express = require("express");
var mysql = require("mysql");
const e = require("express");
// create instance of the express app.
var app = express();

// Setting the port of the application  
// process.env.PORT is for heroku 
var PORT = process.env.PORT || 8080;

// Handlebars as the default templating engine.
app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.listen(PORT, function() {
    //log to know when the server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
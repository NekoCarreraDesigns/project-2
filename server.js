<<<<<<< HEAD
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// // Routes
// // =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
=======
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


// Setting up my routes
app.get("/", (req, res) => {
        res.render("index");
});




app.listen(PORT, function() {
    //log to know when the server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
>>>>>>> 031555ed539f5f26f83d0265087d10c381e4f483

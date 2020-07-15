<<<<<<< HEAD
require("dotenv").config({path: __dirname + "/.env"});
=======
>>>>>>> ee35f3020d6d639a992b4e47da13d46a9500bc6c
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
<<<<<<< HEAD
const db = require("./models/index.js");
=======
const db = require("./models")

>>>>>>> ee35f3020d6d639a992b4e47da13d46a9500bc6c


// Middleware, express to parse data body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static for app to access public directory
app.use(express.static("public"));
<<<<<<< HEAD
app.use(session({ secret: process.env.SECRET, resave: true, saveUninitialized: true }));
app.set("view engine", "handlebars");
app.engine('handlebars', exphbs({
  layoutsDir: __dirname + '/views/layouts',
  }));

=======
>>>>>>> ee35f3020d6d639a992b4e47da13d46a9500bc6c

app.use(session({ secret: process.env.SECRET || "enhance your calm", resave: true, saveUninitialized: true }));

//Handlebars set
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// import routes to use it 
const routes = require("./controllers/travel_controller.js");
app.use('/', routes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
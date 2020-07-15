<<<<<<< HEAD
=======
require("dotenv").config({path: __dirname + "/.env"});
>>>>>>> b179ab2c1a81ed1bd871075920c0fb63624e645d
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
<<<<<<< HEAD
const db = require("./models")
=======
const db = require("./models/index.js");
>>>>>>> b179ab2c1a81ed1bd871075920c0fb63624e645d


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
<<<<<<< HEAD
=======
app.use(session({ secret: process.env.SECRET, resave: true, saveUninitialized: true }));
app.set("view engine", "handlebars");
app.engine('handlebars', exphbs({
  layoutsDir: __dirname + '/views/layouts',
  }));

>>>>>>> b179ab2c1a81ed1bd871075920c0fb63624e645d


<<<<<<< HEAD
//Handlebars set
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
=======
>>>>>>> b179ab2c1a81ed1bd871075920c0fb63624e645d

const routes = require("./controllers/travel_controller.js");

app.use(routes);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
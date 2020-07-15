require("dotenv").config({ path: __dirname + "/.env" });

require("dotenv").config({ path: __dirname + "/.env" });

require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models/index.js");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(session({ secret: process.env.SECRET, resave: true, saveUninitialized: true }));
app.set("view engine", "handlebars");
app.engine('handlebars', exphbs({
  layoutsDir: __dirname + '/views/layouts',
}));




const routes = require("./controllers/travel_controller.js");

app.use(routes);

app.use(routes);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
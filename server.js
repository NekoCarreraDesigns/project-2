const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models")



// Middleware, express to parse data body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static for app to access public directory
app.use(express.static("public"));

app.use(session({ secret: process.env.SECRET || "enhance your calm", resave: true, saveUninitialized: true }));

//Handlebars set
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes to use it 
const routes = require("./controllers/travel_controller.js");
app.use('/', routes);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
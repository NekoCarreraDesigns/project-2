
const express = require("express");
const exphbs = require("express-handlebars");
const express = require("express");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 8080;

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(session({ secret: process.env.SECRET, resave: true, saveUninitialized: true }));
app.set("view engine", "handlebars");
app.engine('handlebars', exphbs({
  layoutsDir: __dirname + '/views/layouts',
  }));
app.get("/", (req, res) => {
        res.render("main");
});



const routes = require("./controllers/travel_controller.js");

app.use(routes);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});




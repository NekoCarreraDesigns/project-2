
var express = require("express");
var exphbs = require("express-handlebars");
var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

app.set("view engine", "handlebars");
app.engine('handlebars', exphbs({
  layoutsDir: __dirname + '/views/layouts',
  }));


app.get("/", (req, res) => {
        res.render("main");
});

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});




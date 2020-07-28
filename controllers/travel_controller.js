const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const db = require("../models");


const authenticated = require("../config/middleware/authenticated");
const passport = require("../config/password");
// const path = require("path");
// main homepage 
router.get("/", (req, res) => {
    console.log("Landed")
    res.render("index", { style: "style.css" });
});

// user login page after clicking register/login button
router.get("/login", (req, res) => {
    res.render("login", { style: "login.css" });
});

//user account page
router.get("/users", (req, res) => {
    console.log("hello")
    db.Users.findAll({
        where: {
            // id: req.params.id,
            // username: req.params.user_name
        }
    }, (req, res) => {
        console.log(req.body.user_name)
    }).then((req) => {
        res.render("user", { style: "profile.css" })
    })
})

router.get("/visits", (req, res) => {

});

router.get("/locations", (req, res) => {
    console.log("let's Go!")
    db.Locations.findAll({

    }).then((dbtravel) => {
        res.render("locations", { style: "locations.css" })
    })

})
//locations page, for after searching in homepage
router.get("/api/locations/:id", (req, res) => {
    console.log("Lets GO!");
    db.Locations.findOne({
        where: {

        }
    }).then((dbtravelto) => {
        console.log(res);
        res.send("/locations")
    }).catch((err) => {
        if (err) {
            console.log(500)
        } else {
            console.log(200)
        }
    })
    // res.render("locations", { style: "locations.css" });
    //nest another .get method here?
});


// router.post("/locations", (req, res) => {
//     console.log("Here We GO!");
//     db.Locations.create({
//         location_id: req.body.location_id,
//         location_name: req.body.location_name,
//         activity: req.body.activity
//     }).then((res) => {
//         console.log(res)
//         res.render("locations", { style: "locations.css" })
//     }).then((dbtravelto) => {
//         res.send("/users")
//     })

// });

router.post("/api/login", passport.authenticate("local", { successRedirect: "/users", failureRedirect: "/login" }), function (req, res) {
    console.log(res);
    res.send("/users", 200)
});

router.post("/api/signup", function (req, res) {
    let user = req.body;
    let id = uniqid();
    db.Users.create({
        id: id,
        user_name: user.username,
        first_name: user.firstName,
        last_name: user.lastName,
        hashPass: user.pass
    }).then(function () {
        res.redirect(200, "/users");
    }).catch(function (err) {
        console.log(err);
        res.redirect(500, "/login");
    })

})


module.exports = router;

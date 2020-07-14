const express = require("express");
const router = express.Router();

const db = require("../models");
const passport = require("passport");
  
    // main homepage 
    router.get("/", (req, res) => {
        console.log("Reached");
       // db.travelto.findAll({}).then((travel) => {
        //    console.log(travel);
        //    res.json(travel);
       // });
       res.render("index", {style: "style.css"});
    });
    // user login page after clicking register/login button
    router.get("/userlogin", (req, res) => {
         res.render("login", {style: "login.css"});
    });

    //user account page
    router.get("/users", (req, res) => {
        // db.traveto.findAll({
        //     where: {
        //         first_name: req.body.first_name,
        //         last_name: req.body.last_name,
        //         locationsVisited: req.body.locationsVisited,
        //         placesToVisit: req.body.placesToVisit
        //     }
        // }).then((dbtravelto) => {
        //     res.json(dbtravelto);
        // });
        res.render("user.handlebars", {style: "profile.css"})
    });

    router.get("/visits", (req, res) => {
        db.travelto.findAll({
            where: {
                visitId: req.params.id,
                userId: req.params.id,
                locationId: req.body.locationId,
                wasVisited: true
            }
        }).then((dbtravelto) => {
            res.json(dbtravelto)
        });
    });

    router.get("/activities", (req, res) => {
        db.travelto.findAll({
            where: {
                activityId: req.body.id,
                locationId: req.body.locationId
            }
        });
    });

    //locations page, for after searching in homepage
    router.get("/locations", (req, res) => {
        // db.travelto.findAll({
        //     where: {
        //         id: locationId
        //     }
        // }).then((dbtravelto) => {
        //     res.json(dbtravelto)
        // });
        res.render("locations", {style: "locations.css"})
    });


    router.post("/new/location", (req, res) => {
        console.log(req.body);
        db.travelto.create({
            id: req.params.id,
            location: req.body.location,
            activity: req.body.activity
        });
    });
    router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), function (req, res) {
        res.redirect("/")
    })
    router.put("/new/location/:id", (req, res) => {
        db.travelto.findONe({
            where: {
                id: req.params.id
            }
        });
    });
    router.delete("/user/location/:id", (req, res) => {
        db.travelto.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbtravelto) => {
            res.json(dbtravelto)
        });
    });

    

module.exports = router;

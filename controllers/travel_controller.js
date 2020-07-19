const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const db = require("../models");

const authenticated = require("../config/middleware/authenticated");
const passport = require("../config/password");
// const path = require("path");
    // main homepage 
    router.get("/", (req, res) => {
       res.render("index", {style: "style.css"});
    });

    // user login page after clicking register/login button
    router.get("/login", (req, res) => {
         res.render("login", {style: "login.css"});
    });

    //user account page
    router.get("/users", authenticated, (req, res) => {
        if (req.user){
        db.traveto.findAll({
             where: {
                 first_name: req.body.first_name,
                 last_name: req.body.last_name,
             }
         }).then((dbtravelto) => {
             res.json(dbtravelto);
         });
        res.render("user.handlebars", {style: "profile.css"});
    } else { 
        res.redirect("/login");
    }
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
    router.get("/api/location", (req, res) => {
        //andrew, get api to send this back. on second thought, this isn't the right query
        let locationId = req.params.id;
         db.travelto.findAll({
            where: {
                 id: locationId
             }
         }).then((dbtravelto) => {
             res.json(dbtravelto)
         });
        res.render("locations", {style: "locations.css"})
    });


    router.post("/api/location", (req, res) => {
        console.log(req.body);
        db.travelto.create({
            id: req.params.id,
            location: req.body.location,
            activity: req.body.activity
        });
    });
    
    

    router.put("/location/:id", (req, res) => {
        db.travelto.findOne({
            where: {
                id: req.params.id
            }
        });
    });
    
    router.post("/api/login", passport.authenticate("local", { successRedirect:"/users", failureRedirect:"/login"}), function (req, res) {
        console.log(req.body);
        res.json(req.user);
        res.redirect("")
    });

    router.post("/api/signup", function(req, res){
        let user = req.body;
        let id = uniqid();
        db.Users.create({
            id: id,
            username: user.username,
            first_name: user.firstName,
            last_name: user.lastName,
            hashPass: user.pass
        }).then(function(){
            res.redirect(200, "/login");
        }).catch(function(err){
            console.log(err);
            res.redirect(500, "/");
        })

    })
    

module.exports = router;

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
            console.log("verified");
        db.Users.find({
             where: {
                 username: req.body.user
             }
         }).then((dbtravelto) => {
             res.json(dbtravelto);
         });
        res.render("user", {style: "profile.css"});
    } else { 
        res.redirect("/login");
    }
    });

    router.get("/visits", (req, res) => {
        
    });

    router.get("/locations", (req,res)=>{

    })

    //locations page, for after searching in homepage
    router.get("/api/location/:location", (req, res) => {
        console.log(req.params.location);
         db.Locations.findAll({
            where: {
                 location_name: req.params.location
             }
         }).then((dbtravelto) => {
             console.log(dbtravelto);
             //json was here
         });
        res.render("locations", {style: "locations.css"});
        //nest another .get method here?
    });


    router.post("/api/location", (req, res) => {
        console.log(req.body);
        db.Locations.create({
            location: req.body.location,
            activity: req.body.activity
        });
    });
    
    router.post("/api/login", passport.authenticate("local", { successRedirect:"/users", failureRedirect:"/login"}), function (req, res) {
        console.log(req.body);
        res.json(req.user);
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

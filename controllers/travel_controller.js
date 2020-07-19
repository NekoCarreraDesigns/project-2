const express = require("express");
const router = express.Router();

const passport1 = require("../config/password.js");
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
const passport = require("passport");


// main homepage 
router.get("/", (req, res) => {

    console.log("Reached");
    res.render("index", { style: "style.css" });
});
// user login page after clicking register/login button
router.get("/userlogin", (req, res) => {
    res.render("login", { style: "login.css" });

});
router.post("/users", (req, res) => {
    db.Users.create(passport1, {
        id: req.params.id,
        user_name: req.params.user_name,
        password: req.params.password
    }).then((dbtravelto) => {
        res.json(res)
        console.log("New user" + user_name)
    });
    res.redirect("")
})
//user account page

router.get("/users", (req, res) => {
    // db.travelto.findAll({
    //     where: {
    //         user_name: req.body.user_name,
    //         locationsVisited: req.body.locationsVisited,
    //         placesToVisit: req.body.placesToVisit
    //     }
    // }).then((dbtravelto) => {
    //     res.json(dbtravelto);
    // });
router.get("/user", (req, res) => {
    db.traveto.findAll({
        where: {
            user_name: req.body.user_name,
            locationsVisited: req.body.locationsVisited,
            placesToVisit: req.body.placesToVisit
        }
    }).then((dbtravelto) => {
        res.json(dbtravelto);

    });

    res.render("user", { style: "profile.css" })
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

// router.get("/activities", (req, res) => {
//     db.travelto.findAll({
//         where: {
//             activityId: req.body.id,
//             locationId: req.body.locationId
//         }
//     });
// });


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

//locations page, for after searching in homepage
router.get("/locations", (req, res) => {
    // db.travelto.findAll({
    //     where: {
    //         id: locationId
    //     }
    // }).then((dbtravelto) => {
    //     res.json(dbtravelto)
    // });
    db.travelto.findAll({
        where: {
            id: locationId
        }
    }).then((dbtravelto) => {
        res.json(dbtravelto)

    });
    res.render("locations", { style: "locations.css" })
});

// router.put("/new/location", (req, res) => {
//     console.log(req.body);
//     db.travelto.create({
//         id: req.params.id,
//         location: req.body.location,
//         activity: req.body.activity
//     });
// });


router.post("/userlogin", passport.authenticate("local", { failureRedirect: "/login" }), function (req, res) {

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
});

router.put("/new/locations/:id", (req, res) => {
    db.Locations.findONe({
        where: {
            id: req.params.id
        }
    });
});
router.delete("/user/locations/:id", (req, res) => {
    db.travelto.destroy({
        where: {
            id: req.params.id
        }
    }).then((dbtravelto) => {
        res.json(dbtravelto)

    });
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

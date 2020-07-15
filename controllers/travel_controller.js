const express = require("express");
const router = express.Router();
const db = require("../models");

module.exports = () => {
    router.get("/", (req, res) => {
        db.travelto.findAll({}).then((dbAndrew) => {
            res.json(dbtravelto)
        });
        res.render("index", [travelto])
    });

    router.get("/users", (req, res) => {
        db.traveto.findAll({
            where: {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                locationsVisited: req.body.locationsVisited,
                placesToVisit: req.body.placesToVisit
            }
        }).then((dbtravelto) => {
            res.json(dbtravelto);
        });
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

    router.get("/locations", (req, res) => {
        db.travelto.findAll({
            where: {
                id: locationId
            }
        }).then((dbtravelto) => {
            res.json(dbtravelto)
        });
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
};


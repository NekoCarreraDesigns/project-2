const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
passport.use(new LocalStrategy({ usernameField: "username"} ,
    function (username, password, done) {
        db.User.findOne({ username: username }).then(function(user){
            if (!user) { return done(null, false, {message: "User not found"}); }
            else if (!user.validPassword(password)) { return done(null, false, {message: "The password entered is incorrect"}); }
            return done(null, user);
        });
    }
));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj)
});
module.exports = passport;

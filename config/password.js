const passport = require("passport");
<<<<<<< HEAD
let LocalStrategy = require("passport-local").Strategy;
passport.use("local", new LocalStrategy({
    userInput: "username",
    userPassInput: "password",
    userEmail: "email"

},
    function (username, password, email, done) {
        Users.findOne({
            where: {
                username: username,
                password: password,
                email: email
            }
        }).then(function (err, user) {
            if (user.verifyPassword(password)) {
                return done(null, false);
            }
            console.log(cb)
        })
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    user.findById(id, function (err, user) {
        done(err, user)
    });
});

module.exports = passport;
=======
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
>>>>>>> b9d1bf0f91622e23de781210098148578c384073

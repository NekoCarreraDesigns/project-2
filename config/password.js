const passport = require("passport");
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
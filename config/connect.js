const Sequelize = require("sequelize");
const sequelize = new Sequelize("travelto_db", "root", "Biggie92#@!*", {
    host:"localhost",
    port:3306,
    dialect: "mysql",
    pool: {
        max: 0,
        min: 0,
        idle: 100000
    }
});
module.exports = sequelize;

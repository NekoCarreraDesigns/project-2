const Sequelize = require("sequelize");
const sequelize = new Sequelize("travelto_db", process.env.DB_USER , process.env.DB_PASS, {
    host:process.env.DB_HOST,
    port:3306,
    dialect: "mysql",
    pool: {
        max: 0,
        min: 0,
        idle: 100000
    }
});
module.exports = sequelize;

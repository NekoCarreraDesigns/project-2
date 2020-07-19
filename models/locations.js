module.exports = function (sequelize, DataTypes) {
    let Locations = sequelize.define("Locations", {
        location_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        activity: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        location_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },);
    
    return Locations;
}
module.exports = function (sequelize, DataTypes) {
    let Locations = sequelize.define("Locations", {
        location_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        activity_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        location_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    Locations.associate = function(models) {
        Locations.belongsToMany(models.Activities, {
            as: "activity",
            foreignKey: "activity_id",
            through: "location_activities"
        });
    }
    return Locations;
}
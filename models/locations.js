module.exports = function (sequelize, DataTypes) {
    let Locations = sequelize.define({
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
        Locations.hasMany(models.Activities, {
            as: "activity_id",
            foreignKey: "activity_id"
        });
    }
    return Locations;
}
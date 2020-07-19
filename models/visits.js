module.exports = function (sequelize, DataTypes) {
    let Visits = sequelize.define("Visits", {
        visit_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        wasVisited: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    Visits.associate = function (models) {
        Visits.belongsTo(models.Users, {
            sourceKey: "user_id",
            foreignKey: "id",
            timestamps: false
        });
    };
    Visits.associate = function (models) {
        Visits.belongsToMany(models.Locations, {
            as: "Location_Visits",
            foreignKey: "location_id",
            through: "Visit_Locations",
            timestamps: false
        })
    }

    return Visits;
}
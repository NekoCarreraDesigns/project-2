module.exports = function (sequelize, DataTypes) {
    let Visits = sequelize.define("Visits", {
        visit_id: {
<<<<<<< HEAD
            type: DataTypes.INTEGER,
            allowNull: false
=======
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
>>>>>>> b9d1bf0f91622e23de781210098148578c384073
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
<<<<<<< HEAD
    });
    Visits.associate = function (models) {
        Visits.belongsToMany(models.Users, {
=======
    }, );
    Visits.associate = function(models){
        Visits.belongsTo(models.Users, {
>>>>>>> b9d1bf0f91622e23de781210098148578c384073
            sourceKey: "user_id",
            foreignKey: "id",
            timestamps:false
        });
    };
    Visits.associate = function (models) {
        Visits.belongsToMany(models.Locations, {
            as: "Location_Visits",
            foreignKey: "location_id",
<<<<<<< HEAD
            through: "Visit_Locations"
=======
            through:"Visit_Locations",
            timestamps: false
>>>>>>> b9d1bf0f91622e23de781210098148578c384073
        })
    }

    return Visits;
}
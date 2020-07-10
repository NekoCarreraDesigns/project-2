module.exports = function (sequelize, DataTypes) {
    let Visits = sequelize.define({
        visit_id: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        wasVisited: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    Visits.associate = function(models){
        Visits.belongsToMany(models.Users, {
            as: "user_id",
            foreignKey: "id"
        });
    };
    Visits.associate = function(models) {
        Visits.hasMany(models.Locations, {
            as: "location_id",
            foreignKey: "location_id"
        })
    }
    
    return Visits;
}
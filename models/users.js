module.exports = function (sequelize, DataTypes) {
    let Users = sequelize.define({
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hashPass: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    Users.associate = function(models){
        Users.hasMany(models.Visits, {
            foreignKey:true
        })
    }
    return Users;
}
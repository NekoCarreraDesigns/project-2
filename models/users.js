const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    let Users = sequelize.define({
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
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
   
    User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
    };
  
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      
    Users.associate = function(models){
        Users.hasMany(models.Visits, {
            foreignKey:true
        });
    }
    return Users;
}

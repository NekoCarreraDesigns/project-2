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
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Users;
}
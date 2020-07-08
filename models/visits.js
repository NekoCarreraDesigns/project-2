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
    return Visits;
}
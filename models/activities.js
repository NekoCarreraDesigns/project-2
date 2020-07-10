module.exports = function (sequelize, DataTypes) {
  let Activities = sequelize.define({
    activity_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activity_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Activities.associate = function (models) {
    Activities.belongsToMany(models.Locations, {
      foreignKey: "activity_id",
    });
  };
  return Activities;
};

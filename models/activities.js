module.exports = function (sequelize, DataTypes) {

  const Activities = sequelize.define( "Activities",{
    activity_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activity_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  return Activities;
};

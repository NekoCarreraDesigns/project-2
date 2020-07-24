const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
  let Users = sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      hashPass: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Users.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  Users.addHook("beforeCreate", function (users) {
    users.hashPass = bcrypt.hashSync(
      users.hashPass,
      bcrypt.genSaltSync(10, "a"),
      null
    );
  });

  Users.associate = function (models) {
    Users.hasMany(models.Visits, {
      foreignKey: true,
      timestamps: false,
    });
  };
  return Users;
};

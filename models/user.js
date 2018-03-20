'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    roles: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
      underscored: true
    });

  user.associate = function (models) {
    user.hasMany(models.transaction)
    user.hasMany(models.order)
  }

  return user;
};
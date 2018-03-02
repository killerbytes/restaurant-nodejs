'use strict';
module.exports = (sequelize, DataTypes) => {
  var roles = sequelize.define('role', {
    name: DataTypes.STRING
  }, {
    timestamps: false,
  });
  
  return roles;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var roles = sequelize.define('role', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
      timestamps: false,
    });

  return roles;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    roles: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      validate: {
        isBoolean: true
      }
    }
  }, {
      underscored: true
    });

  user.associate = function (models) {
    user.hasMany(models.transaction)
    user.hasMany(models.order)
  }

  return user;
};
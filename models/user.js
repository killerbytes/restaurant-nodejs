'use strict';
const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      unique: {
        args: true,
        msg: 'Username is already used'
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    role: DataTypes.STRING,
    password: {
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
      defaultScope: {
        attributes: { exclude: ['password'] },
      },
      scopes: {
        withPassword: {
          attributes: { include: ['password'] },
        }
      },
      underscored: true,

    });

  user.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(), null);
  }
  user.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  }


  user.associate = function (models) {
    user.hasMany(models.transaction)
    user.hasMany(models.order)
  }

  return user;
};
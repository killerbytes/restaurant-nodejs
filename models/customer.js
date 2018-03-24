'use strict';
module.exports = (sequelize, DataTypes) => {
  var customer = sequelize.define('customer', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
      underscored: true
    });
  return customer;
};
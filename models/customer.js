'use strict';
module.exports = (sequelize, DataTypes) => {
  var customer = sequelize.define('customer', {
    name: DataTypes.STRING
  }, {
    underscored: true
  });
  return customer;
};
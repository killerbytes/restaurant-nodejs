'use strict';
const utils = require('../utils')

module.exports = (sequelize, DataTypes) => {
  var cart = sequelize.define('cart', {
    checkout: DataTypes.BOOLEAN,
    is_checkout: DataTypes.BOOLEAN
  }, {
      underscored: true,
      getterMethods: {
        total: function () {
          return this.orders ? utils.getTotals(this.orders) : 0;
        }
      }
    });

  cart.associate = function (models) {
    cart.hasMany(models.order, { as: 'void' })
    cart.hasMany(models.order)
    cart.belongsTo(models.customer)
    cart.belongsTo(models.table)
  }

  return cart;
};
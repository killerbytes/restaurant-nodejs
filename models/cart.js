'use strict';
module.exports = (sequelize, DataTypes) => {
  var cart = sequelize.define('cart', {
    checkout: DataTypes.BOOLEAN,
    is_checkout: DataTypes.BOOLEAN
  }, {
      underscored: true
    });

  cart.associate = function (models) {
    cart.hasMany(models.order, { as: 'void' })
    cart.hasMany(models.order)
    cart.belongsTo(models.customer)
    cart.belongsTo(models.table)
  }

  return cart;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var order = sequelize.define('order', {
    amount: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    underscored: true
  });

  order.associate = function(models){
    order.belongsTo(models.product)
    order.belongsTo(models.cart)
  }

  return order;
};
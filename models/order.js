'use strict';
module.exports = (sequelize, DataTypes) => {
  var order = sequelize.define('order', {
    price: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    status: DataTypes.STRING,
    is_void: DataTypes.BOOLEAN
  }, {
    underscored: true
  });

  order.associate = function(models){
    order.belongsTo(models.product)
    order.belongsTo(models.cart)
  }

  return order;
};
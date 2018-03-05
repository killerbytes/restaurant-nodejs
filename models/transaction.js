'use strict';
module.exports = (sequelize, DataTypes) => {
  var transaction = sequelize.define('transaction', {
    discount: DataTypes.DECIMAL,
    total_price: DataTypes.DECIMAL,
    total_amount_due: DataTypes.DECIMAL,
    notes: DataTypes.TEXT,
    void: DataTypes.BOOLEAN
  }, {
    underscored: true
  });

  transaction.associate = function(models){
    transaction.belongsTo(models.user)
    transaction.belongsTo(models.cart)
  }

  return transaction;
};
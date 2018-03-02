'use strict';
module.exports = (sequelize, DataTypes) => {
  var transaction = sequelize.define('transaction', {
    discount: DataTypes.DECIMAL,
    amount: DataTypes.DECIMAL,
    total_amount: DataTypes.DECIMAL,
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
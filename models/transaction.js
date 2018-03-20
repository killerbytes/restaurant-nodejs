'use strict';
module.exports = (sequelize, DataTypes) => {
  var transaction = sequelize.define('transaction', {
    discount: {
      type: DataTypes.DECIMAL,
      validate: { isDecimal: true }
    },
    total_price: DataTypes.DECIMAL,
    total_amount_due: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      }
    },
    notes: DataTypes.TEXT,
    void: DataTypes.BOOLEAN
  }, {
      underscored: true
    });

  transaction.associate = function (models) {
    transaction.belongsTo(models.user)
    transaction.belongsTo(models.cart)
  }

  return transaction;
};
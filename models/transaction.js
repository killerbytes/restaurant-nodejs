'use strict';
module.exports = (sequelize, DataTypes) => {
  var transaction = sequelize.define('transaction', {
    discount: {
      type: DataTypes.DECIMAL,
      validate: { isDecimal: true }
    },
    total_price: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      }
    },
    total_amount_due: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      }
    },
    notes: DataTypes.TEXT,
    void: {
      type: DataTypes.BOOLEAN,
      validate: {
        isBoolean: true
      }
    }
  }, {
      underscored: true
    });

  transaction.associate = function (models) {
    transaction.belongsTo(models.user)
    transaction.belongsTo(models.cart)
  }

  return transaction;
};
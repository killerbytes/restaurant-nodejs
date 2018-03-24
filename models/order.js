'use strict';
module.exports = (sequelize, DataTypes) => {
  var order = sequelize.define('order', {
    price: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    is_void: {
      type: DataTypes.BOOLEAN,
      validate: {
        isBoolean: true
      }
    }
  }, {
      underscored: true
    });

  order.associate = function (models) {
    order.belongsTo(models.user)
    order.belongsTo(models.product)
    order.belongsTo(models.cart)
  }

  return order;
};
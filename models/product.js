'use strict';
module.exports = (sequelize, DataTypes) => {
  var product = sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [1, 255]
      }
    },
    description: DataTypes.TEXT,
    price: {
      type: DataTypes.DECIMAL(10, 2),
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
    photo: DataTypes.TEXT
  }, {
      underscored: true,
      paranoid: true
    });

  product.associate = function (models) {
    product.belongsTo(models.category)
    product.hasMany(models.order)
  }

  return product;
};
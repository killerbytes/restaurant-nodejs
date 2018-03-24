'use strict';
module.exports = (sequelize, DataTypes) => {
  var product = sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        max: 255
      }
    },
    description: DataTypes.TEXT,
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
    photo: DataTypes.TEXT
  }, {
      underscored: true
    });

  product.associate = function (models) {
    product.belongsTo(models.category)
    product.hasMany(models.order)
  }

  return product;
};
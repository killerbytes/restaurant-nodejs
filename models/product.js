'use strict';
module.exports = (sequelize, DataTypes) => {
  var product = sequelize.define('product', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    photo: DataTypes.TEXT
  }, {
    underscored: true
  });

  product.associate = function(models){
    product.belongsTo(models.category)
    product.hasMany(models.order)
  }

  return product;
};
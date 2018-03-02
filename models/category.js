'use strict';
module.exports = (sequelize, DataTypes) => {
  var category = sequelize.define('category', {
    name: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true
  });

  category.associate = function(models){
    category.hasMany(models.product)
  }


  return category;
};
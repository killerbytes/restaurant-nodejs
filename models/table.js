'use strict';
module.exports = (sequelize, DataTypes) => {
  var table = sequelize.define('table', {
    name: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true
  });

  table.associate = function(models){
    // table.hasMany(models.cart)
  }

  return table;
};
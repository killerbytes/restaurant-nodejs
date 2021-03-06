'use strict';
module.exports = (sequelize, DataTypes) => {
  var category = sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    order: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    }
  }, {
      timestamps: false,
      underscored: true
    });

  category.associate = function (models) {
    category.hasMany(models.product)
  }


  return category;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Financa extends Model {
    
    static associate(models) {
      
    }
  }
  Financa.init({
    data: DataTypes.DATE,
    categoria_id: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    valor: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Financa',
  });
  return Financa;
};
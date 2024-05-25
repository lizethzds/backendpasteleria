'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categoria extends Model {
   
    static associate(models) {
      this.hasMany(models.producto, {foreignKey:'categoriaid'});
     
    }
  }
  categoria.init({
    id:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull:false

    },
    protegida: {
      type: DataTypes.BOOLEAN,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'categoria',
    tableName:'categoria'
  
  });
  return categoria;
};
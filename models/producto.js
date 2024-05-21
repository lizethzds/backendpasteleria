'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producto extends Model {
    
    static associate(models) {
     producto.belongsTo(models.categoria,{foreignKey:"categoriaid"})
    }
  }
  producto.init({
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    nombre:{
      type:DataTypes.STRING,
      defaultValue:"Sin nombre"
    },
    precio:{
      type:DataTypes.FLOAT,
      allowNull:false
    },
    descripcion: {
      type: DataTypes.STRING,
      defaultValue:"Sin descripcion",
    },
  }, {
    sequelize,
    modelName: 'producto',
  });
  return producto;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producto extends Model {
    
    static associate(models) {
     this.belongsTo(models.categoria, {foreignKey:"categoriaid"})
     this.belongsTo(models.archivo, {foreignKey:"archivoid"})
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
    archivoid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references:{
        model:'archivo',
        key:'id'
      }
  },        
    categoriaid:{
      type: DataTypes.INTEGER,
      allowNull:false,
      references:{
        model: 'categoria',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'producto',
    tableName:'producto'
  });
  return producto;
};
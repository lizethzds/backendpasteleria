'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class archivo extends Model {
        static associate(models) {
            this.hasMany(models.producto, { foreignKey: 'id' });
        }
    }

    archivo.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        mime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        indb: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        datos: {
            type: DataTypes.BLOB("long"),
            allowNull: true
        }
    }, {
        sequelize,
        tableName:'archivo',
        modelName: 'archivo',
    });

    return archivo;
};
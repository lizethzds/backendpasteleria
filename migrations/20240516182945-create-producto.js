'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('producto', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        defaultValue:"Sin titulo"
      },
      precio: {
        type: Sequelize.FLOAT,
        allowNull:false
      },
      descripcion: {
        type: Sequelize.STRING,
        defaultValue:"Sin descripción"
      },
      archivoid: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
            model: 'archivo',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
      categoriaid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categoria',
          key: 'id'
        }
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('producto');
  }
};
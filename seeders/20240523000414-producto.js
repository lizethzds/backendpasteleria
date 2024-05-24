'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('producto', [
      { nombre: 'Pastel de chocolate 1/4', precio: 350, descripcion: 'Pastel de chocolate de 1/4 con cubierta de chocolate y chispas', categoriaid: 1, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Pastel de vainilla 1/4', precio: 350, descripcion: 'Pastel de vainilla de 1/4 con cubierta de vainilla y chispas', categoriaid: 1, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Pastel de tres leches 1/2', precio: 600, descripcion: 'Pastel de tres leches de 1/2 con cubierta de leche condensada', categoriaid: 1, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Pastel de zanahoria 1/8', precio: 180, descripcion: 'Pastel de zanahoria de 1/8 con cubierta de queso crema', categoriaid: 1, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Pay de queso', precio: 180, descripcion: 'Pay de queso de 1/4 con cubierta de galleta graham', categoriaid: 3, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Pay de limón', precio: 180, descripcion: 'Pay de limón de 1/4 con cubierta de merengue', categoriaid: 3, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Pay de manzana', precio: 180, descripcion: 'Pay de manzana de 1/4 con cubierta de hojaldre', categoriaid: 3, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Pan blanco', precio: 60, descripcion: 'Pan blanco de 1/2 kilo', categoriaid: 5, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Pan integral', precio: 65, descripcion: 'Pan integral de 1/2 kilo', categoriaid: 5, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Pan dulce', precio: 5, descripcion: 'Pan dulce de 1/2 kilo', categoriaid: 5, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Volován de jamón y queso', precio: 12, descripcion: 'Volován de hojaldre relleno de jamón y queso', categoriaid: 4, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Volován de atún', precio: 12, descripcion: 'Volován de hojaldre relleno de atún', categoriaid: 4, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('producto', null, {});
  }
};


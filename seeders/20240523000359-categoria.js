'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categoria',[
      {nombre: 'Pastel', protegida:true, createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Dona', protegida:true, createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Pay', protegida:true, createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Volovan', protegida:true, createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Pan', protegida:true, createdAt: new Date(), updatedAt: new Date()}
    ])
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categoria', null , {});
   
  }
};

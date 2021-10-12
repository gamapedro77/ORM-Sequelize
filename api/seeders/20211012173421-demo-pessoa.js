"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "pessoas",
      [
        {
          nome: "Marcos Henrique",
          ativo: true,
          email: "marcos@marcos.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Ana Souza",
          ativo: true,
          email: "ana@ana.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "José Oliveira",
          ativo: true,
          email: "jose@jose.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Gabriel Gama",
          ativo: true,
          email: "gabriel@gabriel.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Sergio Cardoso",
          ativo: true,
          email: "sergio@sergio.com",
          role: "docente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Paula Gomes",
          ativo: true,
          email: "paula@paula.com",
          role: "docente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("pessoas", null, {});
  },
};

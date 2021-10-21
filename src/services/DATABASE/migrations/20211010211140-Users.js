"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      userRank: {
        type: Sequelize.STRING, // master || comum
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updatedAt: { type: Sequelize.DATE },
      createdAt: { type: Sequelize.DATE },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("users");
  },
};

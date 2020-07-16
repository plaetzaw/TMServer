'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tasktitle: {
        type: Sequelize.STRING
      },
      taskdescription: {
        type: Sequelize.STRING
      },
      taskcompletion: {
        type: Sequelize.BOOLEAN
      },
      userID: {
        type: Sequelize.INTEGER
      },
      assignedby: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tasks');
  }
};
"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("tasks", {
      fields: ["assignedto"],
      type: "FOREIGN KEY",
      name: "adding_a_foreign_key_to_assignedto",
      references: {
        table: "users",
        field: "id",
      },
    });
  },

  /* 
  
  module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addConstraint('task', { // name of table that needs constraint
        fields: ['userid'],
        type: 'foreign key',
        name: 'fkey_constraint_for_tasks_table'
        references: {
          table: 'users',
          field: 'id'
        }
      })
    }
  }

  */

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      "users",
      "adding_a_foreign_key_to_assignedto"
    );
  },
};

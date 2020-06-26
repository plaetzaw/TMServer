"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("tasks", ["assignedBy"], {
      type: "FOREIGN KEY",
      references: {
        name: "adding_a_foreign_key_to_AssignedTo",
        table: "users",
        field: "id",
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      "user",
      "adding_a_foreign_key_to_AssignedTo"
    );
  },
};

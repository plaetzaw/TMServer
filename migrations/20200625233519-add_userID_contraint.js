"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("tasks", ["userID"], {
      type: "FOREIGN KEY",
      references: {
        name: "adding_a_foreign_key_to_userID",
        table: "users",
        field: "id",
      },
    });
  },

  // module.exports = {
  //   up: (queryInterface, Sequelize) => {
  //     return queryInterface.addConstraint(
  //       'task', // name of the TABLE with column that needs the new constraint
  //       ['assignedBy'], // name of the COLUMN that needs the constraint
  //       {
  //         type: 'FOREIGN KEY',
  //       references: {
  //         name: '<SOME_SUPER_DESCRIPTIVE_NAME_OF_WHY_YOU_NEED_CONSTRAINT>',
  //         table: 'user',  // TABLE to be referenced
  //         field: 'id' // COLUMN to be referenced as Foreign Key (is typically the Primary Key)
  // }
  //       }
  //     )
  //   }

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      "user",
      "adding_a_foreign_key_to_userID"
    );
  },
};

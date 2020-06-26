"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("tasks", "userID", {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: "user",
        key: "id",
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};

/*
module.exports = {
  up: (queryInterface, Sequelize) => { 
    return queryInterface.addConstraint(
      'task', // name of the TABLE with column that needs the new constraint
      ['assignedBy'], // name of the COLUMN that needs the constraint
      type: 'FOREIGN KEY',
      references: {
        name: '<SOME_SUPER_DESCRIPTIVE_NAME_OF_WHY_YOU_NEED_CONSTRAINT>',
        table: 'user',  // TABLE to be referenced
        field: 'id' // COLUMN to be referenced as Foreign Key (is typically the Primary Key)
      }
    )
  }

  down: (queryInterface, Sequelize) => { 
    return queryInterface.removeConstraint(
      'task', // name of the TABLE to undo
      '<SOME_SUPER_DESCRIPTIVE_NAME_OF_WHY_YOU_NEED_CONSTRAINT>' // name of the super descriptive constraint thing...yeah...see above...or ask jackie. idk :D
    )
  }


*/

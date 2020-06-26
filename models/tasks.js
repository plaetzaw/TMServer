"use strict";
module.exports = (sequelize, DataTypes) => {
  const tasks = sequelize.define(
    "tasks",
    {
      taskTitle: DataTypes.STRING,
      taskDescription: DataTypes.STRING,
      taskCompleted: DataTypes.BOOLEAN,
      assignedTo: DataTypes.INTEGER,
      assignedBy: DataTypes.INTEGER,
      userID: DataTypes.INTEGER,
    },
    {}
  );
  tasks.associate = function (models) {
    // associations can be defined here
    models.tasks.belongsTo(models.user);
  };
  return tasks;
};

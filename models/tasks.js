"use strict";
module.exports = (sequelize, DataTypes) => {
  const tasks = sequelize.define(
    "tasks",
    {
      taskTitle: DataTypes.STRING,
      taskDescription: DataTypes.STRING,
      taskCompleted: DataTypes.BOOLEAN,
    },
    {}
  );
  tasks.associate = function (models) {
    // associations can be defined here
    models.tasks.belongsTo(models.user);
  };
  return tasks;
};

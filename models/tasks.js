"use strict";
module.exports = (sequelize, DataTypes) => {
  const tasks = sequelize.define(
    "tasks",
    {
      tasktitle: DataTypes.STRING,
      taskdescription: DataTypes.STRING,
      taskcompletion: DataTypes.BOOLEAN,
      userID: DataTypes.INTEGER,
      assignedby: DataTypes.INTEGER,
    },
    {}
  );
  tasks.associate = function (models) {
    models.tasks.belongsTo(models.users);
  };
  return tasks;
};

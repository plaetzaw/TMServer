"use strict";
module.exports = (sequelize, DataTypes) => {
  const tasks = sequelize.define(
    "tasks",
    {
      taskname: DataTypes.STRING,
      taskdescription: DataTypes.STRING,
      taskcompleted: DataTypes.BOOLEAN,
      assignedto: DataTypes.INTEGER,
      assignedby: DataTypes.INTEGER,
    },
    {}
  );
  tasks.associate = function (models) {
    models.tasks.belongsTo(models.users);
  };
  return tasks;
};

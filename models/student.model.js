module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define(
    "student",
    {
      student_id: { type: Sequelize.UUID, primaryKey: true },
      // id: { type: Sequelize.UUID },
      student_number: { type: Sequelize.INTEGER },
      class: { type: Sequelize.INTEGER },
      major: { type: Sequelize.STRING(10) },
      student_name: { type: Sequelize.STRING(50) },
    },
    {
      timestamps: false,
    }
  );
  return Student;
};

module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define(
    "student",
    {
      student_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
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

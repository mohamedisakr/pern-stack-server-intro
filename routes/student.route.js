const router = require("express").Router();
const students = require("../controllers/student.controller");

module.exports = (app) => {
  // Retrieve all students
  router.get("/", students.findAll);

  // Retrieve a single Student with id
  router.get("/:id", students.findOne);

  // Create a new Student
  router.post("/", students.create);

  // Update a Student with id
  router.put("/:id", students.update);

  // Delete a Student with id
  router.delete("/:id", students.delete);

  // Delete all students
  router.delete("/", students.deleteAll);
  app.use(process.env.STUDENT_ROUTE, router);
};

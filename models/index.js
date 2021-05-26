const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config");

const configurations = {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: parseInt(dbConfig.pool.max),
    min: parseInt(dbConfig.pool.min),
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
};

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  configurations
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// students
db.students = require("./student.model")(sequelize, Sequelize);

module.exports = db;

module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT, //"postgres",
  pool: {
    max: process.env.POOL_MAX, //5,
    min: process.env.POOL_MIN, //0,
    acquire: process.env.POOL_ACQUIRE, //30000,
    idle: process.env.POOL_IDLE, //10000,
  },
};

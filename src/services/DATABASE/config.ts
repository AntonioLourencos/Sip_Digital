require("dotenv").config();

module.exports = {
  development: {
    username: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME,
    host: process.env.BD_PATH,
    port: process.env.BD_PORT,
    dialect: process.env.BD_CLIENT,
  },
  test: {
    username: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME,
    host: process.env.BD_PATH,
    port: process.env.BD_PORT,
    dialect: process.env.BD_CLIENT,
  },
  production: {
    username: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME,
    host: process.env.BD_PATH,
    port: process.env.BD_PORT,
    dialect: process.env.BD_CLIENT,
  },
};

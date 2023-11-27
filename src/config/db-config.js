const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
};

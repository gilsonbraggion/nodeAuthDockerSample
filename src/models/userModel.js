// src/models/userModel.js
const db = global.db;
const createUserTable = async () => {
  await db.execute(`CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
  )`);
};
module.exports = { createUserTable };
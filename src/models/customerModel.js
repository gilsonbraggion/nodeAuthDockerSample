// src/models/customerModel.js
const createCustomerTable = async () => {
    await db.execute(`CREATE TABLE IF NOT EXISTS customers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255) UNIQUE,
      phone VARCHAR(255)
    )`);
  };
  module.exports = { createCustomerTable };
// src/controllers/customerController.js
const { createCustomerTable } = require('../models/customerModel');
exports.createCustomer = async (req, res) => {
  try {
    await createCustomerTable();
    const { name, email, phone } = req.body;
    await global.db.execute('INSERT INTO customers (name, email, phone) VALUES (?, ?, ?)', [name, email, phone]);
    res.status(201).json({ name, email, phone });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCustomers = async (req, res) => {
  try {
    await createCustomerTable();
    const [customers] = await global.db.execute('SELECT * FROM customers');
    res.json(customers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

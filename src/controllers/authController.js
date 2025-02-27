// src/controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { createUserTable } = require('../models/userModel');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUserTable();
    await global.db.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);
    res.status(201).json({ name, email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [users] = await global.db.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (!users.length || !(await bcrypt.compare(password, users[0].password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: users[0].id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
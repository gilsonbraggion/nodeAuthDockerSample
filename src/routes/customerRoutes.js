// src/routes/customerRoutes.js
const express = require('express');
const { createCustomer, getCustomers } = require('../controllers/customerController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();
router.post('/', authMiddleware, createCustomer);
router.get('/', authMiddleware, getCustomers);
module.exports = router;

// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');
const customerRoutes = require('./src/routes/customerRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/customers', customerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
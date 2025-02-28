// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');
const customerRoutes = require('./src/routes/customerRoutes');

// Define a router with the base path
const myAppRouter = express.Router();

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/node-api-sample/api/auth', authRoutes);
app.use('/node-api-sample/api/customers', customerRoutes);

// Use the router with the base path
app.use("/node-api-sample", myAppRouter);

// Define a sample route under /my-app
myAppRouter.get("/", (req, res) => {
    res.send("Welcome to Node Auth Sample!");
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const {connectDB }= require('./db');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection URI


connectDB();

const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');



app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen( process.env.PORT , () => {
  console.log('Server is running on port 3000');
});
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./config/db');

dotenv.config();
connectDB();

app.use(express.json());

// Import Routes
const userRoutes = require('./routes/userRoutes');

// Use Routes
app.use('/app', userRoutes);

app.get('/', (req, res) => {
    res.send('Ata haider');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
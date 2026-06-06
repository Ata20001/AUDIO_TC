const express = require('express');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./config/db');

// Connect to MongoDB
dotenv.config();
connectDB();

app.get('/', (req, res) => {
    res.send('Ata haider');
});


app.listen(4000, () =>{
console.log('Server is running on port 4000');
})
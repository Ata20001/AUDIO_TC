const express = require('express');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./config/db');

dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
const userRoutes = require('./routes/userRoutes');
const protectedRoute = require('./middleware/authMiddleware');

// Use Routes

app.get('/dashboard', protectedRoute, (req, res) => {
    res.status(200).json({ 
        message: 'Welcome to the dashboard' ,
        email: req.user.email
    });
});



app.use('/app', userRoutes);



app.get('/', (req, res) => {
    res.send('Ata haider');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
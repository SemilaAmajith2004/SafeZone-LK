//import the packages
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Load the details from env file
dotenv.config();

//initiallize the express app
const app = express();

//Add the middleware for the json file come with request
app.use(express.json());

//create the mongoDB connection
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then (() => {
    console.log ('[SafeZone LK] MongoDB Database connected successfully!');
})
.catch((err) => {
    console.error('[SafeZone LK] Database connection error:', err.message);
});

//This is the first test API route (root endpoint)
app.get('/',(req, res) =>{
    res.status(200).json({
        status: 'sucess',
        message: 'Welcome to the SafeZone LK Emergency system'
    })
})

//Decide the port that server run (from .env or default)
const PORT = process.env.PORT || 5000;

//power up the server to get request
app.listen(PORT, () => {
    console.log(`[SafeZone LK] server running smoothly on port ${PORT}`);
});
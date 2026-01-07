// Improt express module
const express = require ('express');
const app = express();

// Run on port 3000
app.listen(3000, () => {
    console.log('Server is runging on port 3000');
});

// Adding health endpoint using get method 
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'sucess',
        message: 'OK'
    });
});

// Adding error endpoint using get method
app.get('/error', (req, res) => {
    res.status(500).json({
        status: 'failed',
        message: 'Something went wrong, please try later!'
    });
});
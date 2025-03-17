const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB (without deprecated options)
mongoose.connect('mongodb://localhost:27017/yourDatabase')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, your Node.js app is running on EC2 with MongoDB!');
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is running on http://<YOUR_PUBLIC_IP>:${PORT}`);
});

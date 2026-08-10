const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows the server to accept JSON data

// A simple GET route
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the backend server!" });
});

module.exports = app;
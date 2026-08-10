const express = require('express');
const cors = require('cors');

const app = express();
// const PORT = ;

// Middleware
app.use(cors());
app.use(express.json()); // Allows the server to accept JSON data

// A simple GET route
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the backend server!" });
});

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
module.exports = app;
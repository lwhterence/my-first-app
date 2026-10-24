const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// A simple API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from your free backend server!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
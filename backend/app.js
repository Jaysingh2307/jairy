const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

// Example API route (optional)
app.get('/api/hello', (req, res) => {
  res.send('Hello from Jairy backend!');
});

// Catch-all route to serve frontend for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(Server running at http://localhost:${PORT});
});// Backend Express server

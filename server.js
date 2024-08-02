const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const JSON_SERVER_PORT = 3200;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/*', (req, res) => {
  res.redirect(`http://localhost:${JSON_SERVER_PORT}${req.path}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Charger les notes depuis db.json
const getNotes = () => {
  const data = fs.readFileSync(path.join(__dirname, 'db.json'));
  return JSON.parse(data);
};

// Routes API
app.get('/api/notes', (req, res) => {
  const notes = getNotes();
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const notes = getNotes();
  const newNote = { id: notes.length + 1, ...req.body };
  notes.push(newNote);
  fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(notes, null, 2));
  res.status(201).json(newNote);
});

// Autres routes...
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

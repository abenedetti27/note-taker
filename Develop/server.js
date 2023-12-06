const express = require('express');
const fs = require('fs');
const { get } = require('http');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res) => {
    const notes = getNotes();
    res.json(notes);
});

app.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = generateUniqueId();
    const notes = getNotes();
    notes.push(newNote);
    saveNotes(notes);
    res.json(newNote);
});

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});

function getNotes() {
    const notes = fs.readFileSync(path.join(__dirname, 'db', 'db.json'), 'utf8');
    return JSON.parse(data) || [];
}

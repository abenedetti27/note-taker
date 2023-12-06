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

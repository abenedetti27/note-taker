# Note Taker

[Visit Deployed Site](https://abenedetti27.github.io/password-generator/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description <a name="description"></a>

This is an app to write and save notes to organize thoughts and keep track of tasks to be completed.

## Table of Countents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation <a name="installation"></a>
When the user opens the Note Taker, they are presented with a landing page with a link to a notes page. After they click on the link to the notes page they are presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

When the user enters a new note title and the note’s text they can see a "Save Note" button and a "Clear Form" button in the navigation at the top of the page. After clicking on the Save button, a new note they have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear.

When the user clicks on an existing note in the list in the left-hand column that note appears in the right-hand column and a "New Note" button appears in the navigation. When the user clicks on the "New Note" button in the navigation at the top of the page
they are presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears.



![Screenshot of New Note]![Screenshot](image.png)

Code Snippet
```
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/api/notes', (req, res) => {
    const notes = getNotes();
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = generateUniqueId();
    const notes = getNotes();
    notes.push(newNote);
    saveNotes(notes);
    res.json(newNote);

});
```

## Usage <a name="usage"></a>
This is a deployed application to write and save notes to organize thoughts and keep track of tasks to be completed.


## License <a name="license"></a>
MIT License


## Questions <a name="questions"></a>

GitHub Profile: [github](https://github.com/abenedetti27)

Please direct any questions to:

Email: abenedetti27@gmail.com

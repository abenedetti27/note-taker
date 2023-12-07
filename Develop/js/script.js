document.addEventListener('DOMContentLoaded', function () {
    const notesLink = document.getElementById('notesLink');
    const saveButton = document.getElementById('saveButton');
    const clearButton = document.getElementById('clearButton');
    const newNoteButton = document.getElementById('newNoteButton');
    const getStartedButton = document.getElementById('getStartedButton');

    notesLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = './assets/notes.html';
    });

    saveButton.addEventListener('click', function () {
        // Add your save functionality here
    });

    document.addEventListener('input', function () {
        // Add your input handling code here
    });

    newNoteButton.addEventListener('click', function () {
        // Add your new note handling code here
    });

    getStartedButton.addEventListener('click', function () {
        console.log('button clicked');
        window.location.href = './assets/notes.html';
    });
});

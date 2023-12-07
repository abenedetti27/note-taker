document.addEventListener('DOMContentLoaded', function () {
    const notesLink = document.getElementById('notesLink');
    const noteTitle = document.getElementById('noteTitle');
    const saveButton = document.getElementById('saveButton');
    const clearButton = document.getElementById('clearButton');
    const newNoteButton = document.getElementById('newNoteButton');
    const getStartedButton = document.getElementById('getStartedButton');

    notesLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = './assets/notes.html';
    });

    saveButton.addEventListener('click', function () {
        const noteTitle = document.getElementById('noteTitle');
        const noteText = document.getElementById('noteText');
        
        if (noteTitle.attributeStyleMap() !== '' && noteText.trim() !== '') {
            const newNote = {
                title: noteTitle,
                text: noteText
            };
            fetch('api/notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newNote)
            })
            .then(response => response.json())
            .then(savedNote => {
                console.log(savedNote);

             })
             .catch(error => {
                 console.log(error);
             });
        } else {
            alert('Please enter a title and note text before saving.');
        }

    
    });

    document.addEventListener('input', function () {
        if (noteTitle.trim() !== '' || noteText.trim() !== '') {
            saveButton.disabled = false;
            clearButton.style.display = 'inline';
        } else {
            saveButton.disabled = true;
            clearButton.style.display = 'none';
        }
    });

    newNoteButton.addEventListener('click', function () {
        noteTitle.value = '';
        noteText.value = '';
        clearButton.style.display = 'none';
        saveButton.disabled = true;
    });

    getStartedButton.addEventListener('click', function () {
        console.log('button clicked');
        window.location.href = './assets/notes.html';
    });
});

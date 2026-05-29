// Gets the html elements
const input = document.getElementById('noteInput');
const button = document.getElementById('button');
const list = document.getElementById('listNotes');

// Displays the elements
console.log(input);
console.log(button);
console.log(list);

// API URL (JSON Server)
const API_URL = "http://localhost:3000/notas";

// Array to store notes
let notas = [];

// Save notes in Local Storage
function saveNotes() {
    localStorage.setItem("notas", JSON.stringify(notas));
    console.log("Local Storage Updated:", notas);
}

// Load notes from Local Storage
function loadLocalNotes() {
    const storedNotes = localStorage.getItem("notas");
    if (storedNotes) {
        notas = JSON.parse(storedNotes);
        notas.forEach(note => {
            createNoteElement(note);
        });
    }
}

// Create note in DOM
function createNoteElement(note) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');
    li.textContent = note.text;

    // Edit button
    editButton.textContent = "Edit";

    // Delete button
    deleteButton.textContent = "X";

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    list.appendChild(li);

    // DELETE request
    deleteButton.addEventListener('click', async function () {
        try {
            await fetch(`${API_URL}/${note.id}`, {
                method: "DELETE"
            });
            list.removeChild(li);
            notas = notas.filter(n => n.id !== note.id);
            saveNotes();
            console.log("Note deleted:", note);

        } catch (error) {
            console.error("Error deleting note:", error);
        }
    });

    // UPDATE request
    editButton.addEventListener('click', async function () {
        const newText = prompt("Edit your note:", note.text);

        if (!newText) return;
        try {
            const response = await fetch(`${API_URL}/${note.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: note.id,
                    text: newText
                })
            });

            const updatedNote = await response.json();
            li.childNodes[0].textContent = updatedNote.text;
            // Update Local Storage
            const index = notas.findIndex(n => n.id === note.id);
            notas[index] = updatedNote;
            saveNotes();
            console.log("Note updated:", updatedNote);

        } catch (error) {
            console.error("Error updating note:", error);
        }
    });
}

// GET request
async function getNotes() {

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("GET Notes:", data);
        notas = data;
        list.innerHTML = "";
        notas.forEach(note => {
            createNoteElement(note);
        });
        saveNotes();
    } catch (error) {
        console.error("Error getting notes:", error);
    }
}

// Add note
button.addEventListener('click', async function(event) {

    event.preventDefault();

    // Validate if the input is empty
    if (input.value === "") {
        alert('Please, write a note');
        return;
    }

    const newNote = {
        text: input.value
    };

    // POST request
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote)
        });
        const data = await response.json();
        console.log("POST Note:", data);
        notas.push(data);
        createNoteElement(data);
        saveNotes();
        input.value = '';

    } catch (error) {
        console.error("Error adding note:", error);
    }
});

// Load notes when page starts
getNotes();
loadLocalNotes();
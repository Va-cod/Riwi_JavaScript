// Gets the html elements
const input = document.getElementById('noteInput');
const button = document.getElementById('button');
const list = document.getElementById('listNotes');

// Displays the elements
console.log(input);
console.log(button);
console.log(list);

button.addEventListener('click', function(event) {

    event.preventDefault();

    // Validate if the input is empty
    if (input.value === "") {
        alert('Please, write a note');
        return;
    }

    const li = document.createElement('li');                  // Create the <li>
    const deleteButton = document.createElement('button');    // Create the delete button
    
    li.textContent = input.value;                             // Add the note text
    deleteButton.innerHTML = 'x';                             // Add text to the button

    li.appendChild(deleteButton);                             // Insert the button into the <li>
    list.appendChild(li);                                     // Insert the <li> into the <ul>

    console.log(input);                                       // Print message in console
    input.value = '';                                         // Clear the input

    deleteButton.addEventListener('click', function(){
        console.log(li);
        list.removeChild(li);                                 // Remove the <li> from de list
    })
});
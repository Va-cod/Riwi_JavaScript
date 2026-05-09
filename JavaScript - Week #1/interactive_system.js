// Import and activate the prompt-sync library
const prompt = require("prompt-sync")()

// User data entry
let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");

// Age validation
while (isNaN(age)) {
    console.error("\nError: Please, enter a valid age in numbers.");
    age = prompt("Enter your age: ");
} 

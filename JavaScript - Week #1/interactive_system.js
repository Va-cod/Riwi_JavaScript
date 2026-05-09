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

// Conditionals and dynamic messages
if (age < 18) {
    console.log(`\nHi ${name}, you're underage. Keep learning and enjoying coding!`);
} else {
    console.log(`\nHello ${name}, you are of legal age. Get ready for great opportunities in the world of programming!`);
}
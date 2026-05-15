// Task #1: creation of the product object
let product = {
    id: 1,                  // Product ID
    productName: "apple",   // Product name
    price: 2500             // Product price
}
// Show the complete object in the console
console.log(product);


// Task #2: using Set in JavaScript
let numbers = new Set([1, 2, 3, 4, 5, 5, 1, 2, 3, 4]);

console.log("\nInitial Set:", numbers);           // Show the initial Set values

numbers.add(10);                                // Add a new value to the Set
console.log("Set after adding 10:", numbers);   // Show the Set after adding a new value

let hasNumber = numbers.has(10);                // Check if the value 10 exists in the Set
numbers.delete(1);                              // Remove the value 1 from the Set

console.log("Does the Set contain 10?", hasNumber);       // Show the result of the search
console.log("Set after deleting 1:", numbers, "\n");            // Show the Set after deleting the value 1

// Loop through all Set values
for (let number of numbers) {
    console.log("Current number:", number);               // Show each value stored in the Set
}


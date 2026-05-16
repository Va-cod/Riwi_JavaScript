// Task #1: creation of the product object
let product = {
    id: 1,                  // Product ID
    productName: "apple",   // Product name
    price: 2000             // Product price
}
// Show the complete object in the console
console.log(product);


// Task #2: using Set in JavaScript
let numbers = new Set([1, 2, 3, 4, 5, 5, 1, 2, 3, 4]);
console.log("\nInitial Set:", numbers);            // Show the initial Set values

numbers.add(10);                                   // Add a new value to the Set
console.log("Set after adding 10:", numbers);      // Show the Set after adding a new value

let hasNumber = numbers.has(10);                   // Check if the value 10 exists in the Set
numbers.delete(1);                                 // Remove the value 1 from the Set

console.log("Does the Set contain 10?", hasNumber);             // Show the result of the search
console.log("Set after deleting 1:", numbers, "\n");            // Show the Set after deleting the value 1

// Loop through all Set values
for (let number of numbers) {
    console.log("Current number:", number);               // Show each value stored in the Set
}


// Task #3: creating a Map
let mapCreated = new Map();

// Add key-value pairs using the product object information
mapCreated.set("Category", "Fruits");
mapCreated.set("ID", product.id);
mapCreated.set("Product Name", product.productName);
mapCreated.set("Price", product.price);

console.log("\nMap:", mapCreated);                                   // Show the complete Map
console.log("Category:", mapCreated.get("Category"));                // Show the product category
console.log("Product Name:", mapCreated.get("Product Name"), "\n");  // Show the product name

// Loop through the Map
console.log("Loop for...of")
for (let [key, value] of mapCreated) {
    console.log(`${key}: ${value}`);      // Show each key and value
}


// Taks 4: iteration over data structures

// Loop through all object properties
console.log("\nLoop for...in")
for (let key in product) {
    console.log(`${key}: ${product[key]}`);
}
// Loop through all Map elements
console.log("\nLoop forEach")
mapCreated.forEach((key, value) => {console.log(`${key}: ${value}`)});


// Task #5: Validation and testing

// Validate the object information
if (typeof product.id === "number" && typeof product.productName === "string" &&  typeof product.price === "number" &&  product.price > 0  && product.id !== null && product.productName !== null && product.price !== null) {
    console.log("\nValid object");     // Object is valid
} else {
    console.log("\nInvalid object");   // Object is invalid
}

// Validate the set information
let set;
for (let number of numbers) {
    if (typeof number !== "number") {
        set = false;
        break
    } else {
        set = true;
    }
}

if (set === true) {
    console.log("Valid set");    // Set is valid
} else {
    console.log("Invalid set");  // Set is valid
}

// Validate the map information
if (typeof mapCreated.get("ID") === "number" && mapCreated.get("ID") >= 0 && typeof mapCreated.get("Product Name") === "string" && typeof mapCreated.get("Price") === "number" && mapCreated.get("Price") > 0 && mapCreated.get("ID") !== null && mapCreated.get("Product Name") !== null && mapCreated.get("Price") !== null) {
    console.log("Valid map");     // Map is valid
} else {
    console.log("Invalid map");   // Map is invalid
}
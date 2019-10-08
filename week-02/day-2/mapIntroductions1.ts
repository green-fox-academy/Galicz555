// Map introductions 1

// Create an empty map where the keys are integers and the values are characters
let empty = {};

// Print out whether the map is empty or not
if (Object.keys(empty).length === 0) {
    console.log("No properties")
}

// Add the following key-value pairs to the map
empty = {
    97: "a",
    98:	"b",
    99:	"c",
    65:	"A",
    66:	"B",
    67:	"C",
};

console.log(empty);

// Print all the keys
console.log(Object.keys(empty));

// Print all the values
console.log(Object.values(empty));

// Add value D with the key 68
empty[68] = "D";
console.log(empty);

// Print how many key-value pairs are in the map
console.log(Object.keys(empty).length);

// Print the value that is associated with key 99
console.log(empty[99]);

// Remove the key-value pair where with key 97
delete empty[97];
console.log(empty);

// Print whether there is an associated value with key 100 or not
console.log(empty.hasOwnProperty(100));

// Remove all the key-value pairs
Object.keys(empty).forEach(function (key) {delete empty[key]});
console.log(empty);
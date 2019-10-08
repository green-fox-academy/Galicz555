// List introducitons 1

// Create an empty list which will contain names (strings)
let array: string[] = [];

// Print out the number of elements in the list
let numberOfElements: number = 0;
for (let i = 0; i < array.length; i++) {
    ++numberOfElements;
}
console.log(numberOfElements)

// Add William to the list
// Print out whether the list is empty or not
array.push("William");
console.log(array);

// Add John to the list
// Add Amanda to the list
// Print out the number of elements in the list
array.push("Jhon");
array.push("Amanda");
for (let i = 0; i < array.length; i++) {
    ++numberOfElements;
}
console.log(numberOfElements)
console.log(array);

// Print out the 3rd element
console.log(array[2]);

// Iterate through the list and print out each name
//  William
//  John
//  Amanda
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Iterate through the list and print
// 1. William
// 2. John
// 3. Amanda

for (let i = 0; i < array.length; i++) {
    console.log((i + 1) + ". " + array[i])
};

// Remove the 2nd element
array.splice(1, 1);
console.log(array);

// Iterate through the list in a reversed order and print out each name
// Amanda
// William

for (let i = 1; i >= 0; i--){
    console.log(array[i]);
}

// Remove all elements
array.splice(0,3);
console.log(array);
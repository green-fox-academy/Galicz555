//list introduction 2

// Create a list ('List A') which contains the following values
// Apple, Avocado, Blueberries, Durian, Lychee
let ListA = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];

// Create a new list ('List B') with the values of List A
let ListB = [...ListA];
console.log(ListA);
console.log(ListB);

// Print out whether List A contains Durian or not
console.log(ListA.indexOf("Durian"));

// Remove Durian from List B
ListB.splice(3, 1);
console.log(ListB);

// Add Kiwifruit to List A after the 4th element
ListA.splice(3, 0, "Kiwi");
console.log(ListA);

// Compare the size of List A and List B
console.log("The length of ListA: " + ListA.length + ", compared to length of ListB: " + ListB.length);

// Get the index of Avocado from List A
console.log(ListA.indexOf("Avocado"));

// Get the index of Durian from List B
console.log(ListB.indexOf("Durian"));

// Add Passion Fruit and Pomelo to List B in a single statement
ListB.push("Passion fruit", "Pomelo");
console.log(ListB);

// Print out the 3rd element from List A
console.log(ListA[2]);
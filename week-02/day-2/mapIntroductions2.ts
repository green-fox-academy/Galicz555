// map introduction 2
// Create a map where the keys are strings and the values are strings with the following initial values
let stuff = {
    "978-1-60309-452-8": "A Letter to Jo",
    "978-1-60309-459-7": "Lupus",
    "978-1-60309-444-3": "Red Panda and Moon Bear",
    "978-1-60309-461-0": "The Lab"
}

// Print all the key-value pairs in the following format
let keyArray: string[] = Object.keys(stuff);
for (let i = 0; i < keyArray.length; i++) {
    console.log(`${stuff[keyArray[i]]} (ISBN: ${keyArray[i]})`)
}

// Remove the key-value pair with key 978-1-60309-444-3
delete stuff["978-1-60309-444-3"];

// Remove the key-value pair with value The Lab
for (let i = 0; i < keyArray.length; i++){
    if(stuff[keyArray[i]] == "The Lab"){
        delete stuff[keyArray[i]];
    }
};
console.log(stuff);

// Add the following key-value pairs to the map
stuff["978-1-60309-450-4"] = "They Called Us Enemy";
stuff["978-1-60309-453-5"] = "Why Did We Trust Him?";
console.log(stuff);

// Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(Object.hasOwnProperty(478-0-61159-424-8));

// Print the value associated with key 978-1-60309-453-5
console.log(stuff["978-1-60309-453-5"]);
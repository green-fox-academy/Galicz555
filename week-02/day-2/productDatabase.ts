'use strict'

// Create a map with the following key-value pairs.

// Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550

let productDatabase = {
    "Eggs":	200,
    "Milk":	200,
    "Fish":	400,
    "Apples":	150,
    "Bread":	50,
    "Chicken":	550,
}

// Create an application which solves the following problems.

// How much is the fish?
// What is the most expensive product?
// What is the average price?
// How many products' price is below 300?
// Is there anything we can buy for exactly 125?
// What is the cheapest product?

function application (productDatabase) {
    console.log("The fish costs " + productDatabase["Fish"]);
    let keyArray: number[] = Object.values(productDatabase);
    let total3 = keyArray.reduce(function(a, b) {
        return Math.max(a, b);
    })
    console.log("Our most expensive product is " + total3);
}


application(productDatabase)
// We are going to represent our expenses in a list containing integers.

// Create a list with the following items.
// 500, 1000, 1250, 175, 800 and 120
let expenses : number [] = [500, 1000, 1250, 175, 800, 120];

// Create an application which solves the following problems.
// How much did we spend?
// Which was our greatest expense?
// Which was our cheapest spending?
// What was the average amount of our spendings?

function application(x:number []): void{ 
    let total = x.reduce((a, b) => {
        return a + b;
    });
    console.log("We spent " + total);

    let total2 = x.reduce((a, b) => {
        return Math.max(a, b);
    })
    console.log("Our greates expense is " + total2);
    
    let total3 = x.reduce((a, b) => {
        return Math.min(a, b);
    })
    console.log("Our cheapest expense is " + total3);

    let total4 = x.reduce((a, b) => {
        return (a + b) /2
    })
    console.log("Our average spendings " + total4);
}

application(expenses);

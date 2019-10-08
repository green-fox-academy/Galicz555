// Create a list with the following items.
// Eggs, milk, fish, apples, bread and chicken
let shoppingList: string[] = ["Eggs", "milk", "fish", "apples", "bread", "chicken"];

// Create an application which solves the following problems.
// Do we have milk on the list?
// Do we have bananas on the list?



let x: string = "milk";
let y: string = "bananas";
function doWeHave(e: string): boolean {
    for (let i = 0; i < shoppingList.length; i++) {
        if (e === shoppingList[i]) {
            return true;
        } 
    }
}
function doWeHave2(e: string): boolean {
    for (let i = 0; i < shoppingList.length; i++) {
        if (e != shoppingList[i]) {
            return false;
        } 
    }
}

console.log(doWeHave(x));
console.log(doWeHave2(y));

// let milk: number = 0;
// let bananas: number = 0;

// for (let i = 0; i < shoppingList.length; i++){
//     if(shoppingList[i] == "milk"){
//         milk++;
//     };
//     if(shoppingList[i] == "bananas"){
//         bananas++;
//     }
// }
// if(milk > 0){
//     console.log("Our shopping list contains milk!");
// } else {
//     console.log("We're not buying milk today.")
// }
// if (bananas > 0) {
//     console.log("Our shopping list contains bananas!")
// } else {
//     console.log("We're not buying bananas today.")
// }
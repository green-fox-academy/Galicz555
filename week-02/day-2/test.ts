let elves = ["Thanis", "Laurana", "Azlynn", "Lyzanne"];
let nameLengths = elves.map(function (item, index, array) {
    return item.length;
})

console.log(nameLengths);

let dwarves = [4, 5, 6, 7];
let multply = dwarves.map(function (item, index, array) {
    return item * 2;
})

console.log(multply);

console.log(dwarves.forEach(() => +2));
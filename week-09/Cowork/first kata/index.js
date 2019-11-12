'use strict'

let array = ["nice", "evil", "live", "die"];
let x = "evil";
let y = "black";

let z = array.indexOf(y);
console.log(z);











export function anagramm(a, b) {
    let aStringSorted = a.split("").sort();
    let bStringSorted = b.split("").sort();
    if (aStringSorted.length != bStringSorted.length) {
        return false;
    }

    for (let i = 0; i < aStringSorted.length; i++) {
        if (aStringSorted[i] != bStringSorted[i]) {
            return false;
        }
    }
    return true;
}


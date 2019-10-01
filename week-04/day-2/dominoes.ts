
import { domino } from "./domino";

function initializeDominoes(): domino[] {
    let dominoes = [];
    dominoes.push(new domino(5, 2));
    dominoes.push(new domino(4, 6));
    dominoes.push(new domino(1, 5));
    dominoes.push(new domino(6, 7));
    dominoes.push(new domino(2, 4));
    dominoes.push(new domino(7, 1));
    return dominoes;
}

function print(dominoes: domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// print(dominoes);

let orderedDominoes: number[][] = [];
orderedDominoes.push(dominoes[0].values);
dominoes.shift();

for (let i: number = 0; i < 6; i++) {
    for (let j: number = 0; j < dominoes.length; j++) {
        if (orderedDominoes[i][1] == dominoes[j].values[0]) {
            orderedDominoes.push(dominoes[j].values);
            dominoes.splice(j, 1);
        }
    }
}
console.log(orderedDominoes);
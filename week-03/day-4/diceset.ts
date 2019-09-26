class DiceSet {
    dice: number[];
    readonly numOfDices: number = 6;

    roll(): number[] {
        this.dice = [];
        for (let i = 0; i < this.numOfDices; i++) {
            this.dice.push(Math.floor(Math.random() * 6 + 1));
        }
        return this.dice;
    }

    reroll(index?: number): void {
        if (index === undefined) {
            for (let i = 0; i < this.numOfDices; i++) {
                this.dice[i] = Math.floor(Math.random() * 6 + 1);
            }
        } else {
            this.dice[index] = Math.floor(Math.random() * 6 + 1);
        }
    }

    getCurrent(index?: number): number[] | number {
        if (index === undefined) {
            for (let i = 0; i < this.numOfDices; i++) {
                return this.dice;
            }
        } else {
            return this.dice[index];
        }
    }
}

// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll()
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6

let diceSet = new DiceSet();
diceSet.roll();

// buzis megoldás: talán összejövő féle

// for (let l = 0; l < 100000; l++) {
//     diceSet.roll();
//     if (diceSet.dice[0] === 6 && diceSet.dice[1] === 6 && diceSet.dice[2] === 6 && diceSet.dice[3] === 6 && diceSet.dice[4] === 6 && diceSet.dice[5] === 6) {
//         console.log(diceSet.getCurrent());
//     }
// }



// buzis megoldás: tuti összejön

// while (diceSet.dice[0] !== 6 || diceSet.dice[1] !== 6 || diceSet.dice[2] !== 6 || diceSet.dice[3] !== 6 || diceSet.dice[4] !== 6 || diceSet.dice[5] !== 6) {
//     diceSet.reroll();
// }
// console.log(diceSet.getCurrent());




//hetero megoldás: de nem a legjobb (számolóval)

// function isAllDiceSix(diceSet: DiceSet): boolean {
//     for (let o = 0; o < diceSet.dice.length; o++) {
//         if (diceSet.getCurrent(o) !== 6) {
//             return false;
//         } 
//     }
//     return true;
// }

// let counter:number = 0;
// while (!isAllDiceSix(diceSet)) {
//     diceSet.reroll();
//     counter++;
// }
// console.log(diceSet.getCurrent());
// console.log(counter);

// function isDiceSix(dice) {
//     while(dice !== 6){
//         diceSet.reroll()
//     }
// }
let counter = 0;

for (let i = 0; i < diceSet.dice.length; i++) {
    while (diceSet.dice[i] !== 6) {
        diceSet.reroll(i);
        counter++;
    }
}
console.log(diceSet.getCurrent());
console.log(counter);
// Ship
// It should have a list of pirates.
// You must be able to add new pirates to the ship. It must have only one captain!
// You must create the following methods:
// getPoorPirates() which returns a list of names containing the pirates that
// have a wooden leg and have less than 15 golds
// getGolds() which returns the sum of gold owned by the pirates of that particular ship
// lastDayOnTheShip() which calls the pirates' party() method.
// prepareForBattle() which calls
// the pirates' work() method 5 times
// then the ship's lastDayOnTheShip() method.

'use strict'

import { Pirate } from './pirates';

export class Ship {
    private _shipmates: Pirate [];
    private _hasCaptain: boolean;

    constructor () {
        this._shipmates = [];
        this._hasCaptain = false;
    }

    getPirateOnBoard(pirate: Pirate): void {
        if (pirate.isCaptain() === true && this._hasCaptain === true) {
            console.log(`A ship can only have one captain, ${pirate.pirateName()} cannot board!`)
        } else if (pirate.isCaptain() === true && this._hasCaptain === false) {
            this._shipmates.push(pirate);
            this._hasCaptain = true;
            console.log(`${pirate.pirateName()} has boarded the ship and assumed the role of captain!`)
        } else if (pirate.isCaptain() === false) {
            this._shipmates.push(pirate);
            console.log(`${pirate.pirateName()} has boarded the ship!`)
        }
    }

    getPoorPirates(): string {
        let poorPiratesArray: Pirate [] = this._shipmates.filter(pirate => (pirate.howMuchGold() < 15 && pirate.hasWoodenLeg() === true))

        let poorPiratesName: string [] = [];
        for (let i = 0; i < poorPiratesArray.length; i++){
            poorPiratesName.push(poorPiratesArray[i].pirateName())
        }
        return poorPiratesName.toString();
    }

    getGolds(): number {
        let sumOfGold: number = 0;
        for (let i: number = 0; i < this._shipmates.length; i++){
            sumOfGold += this._shipmates[i].howMuchGold();
        }
        return sumOfGold;
    }

    lastDayOnTheShip(): void {
        this._shipmates.forEach(function (pirate) {
            pirate.party()
        })
    }

    prepareForBattle(): void {
        let laborCount: number = 0
        while (laborCount < 5){
            this._shipmates.forEach(function (pirate) {
                pirate.work();
            });
            laborCount++;
        }
        this.lastDayOnTheShip();
    }
}
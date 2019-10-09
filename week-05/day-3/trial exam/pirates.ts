// Pirates
// Write a program which can store pirates in a ship.

// Pirate
// A pirate has a name, an amount of gold and health points, the default value of which is 10.

// A pirate might be a captain and may have a wooden leg.

// You must create the following methods:

// if a pirate is a captain:

// work() which increases the amount of gold possessed by that pirate by 10 and decrease the HP by 5.
// party() which increases the HP by 10.
// if the pirate is not a captain:

// work() which increases the amount of gold by 1 and decreases the HP by 1.
// party() which increases the HP by 1.
// toString() method:

// if the pirate has a wooden leg, then the string that is returned by the function must look like this:

// Hello, I'm Jack. I have a wooden leg and 20 golds.
// If not:

// Hello, I'm Jack. I still have my real legs and 20 golds.

'use strict';

export class Pirate {
    private _name: string;
    private _healthPoints: number;
    private _gold: number;
    private _hasWoodenLeg: boolean;
    protected _isCaptain: boolean;

    constructor (name: string, hasWoodenLeg: boolean, isCaptain: boolean) {
        this._name = name;
        this._healthPoints = 10;
        this._gold = 10;
        this._hasWoodenLeg = hasWoodenLeg;
        this._isCaptain = isCaptain
    }

    work (): void {
        if (this._isCaptain === true){
            this._gold += 10;
            this._healthPoints -= 5;
        } else {
            this._gold += 1;
            this._healthPoints -= 1;
        }
    }

    party (): void {
        if (this._isCaptain === true) {
            this._healthPoints += 10;
        } else {
            this._healthPoints += 1;
        }
    }

    toString (): string {
        if (this._hasWoodenLeg === true) {
            return `Hello, I'm ${this._name}. I have a wooden leg and ${this._gold} golds.`
        } else {
            return `Hello, I'm ${this._name}. I still have my real legs and ${this._gold} golds.`
        }
    }

    pirateName(): string {
        return this._name;
    }

    isCaptain (): boolean {
        return this._isCaptain;
    }

    hasWoodenLeg (): boolean {
        return this._hasWoodenLeg;
    }

    howMuchGold (): number {
        return this._gold;
    }
}

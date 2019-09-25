import { dirname } from "path";

class animal {
    private _hunger;
    private _thirst;

    constructor(hunger: number = 50, thirst: number = 50) {
        this._hunger = hunger
        this._thirst = thirst
    }

    public eat(): void {
        this._hunger--;
    }

    public drink(): void {
        this._thirst--;
    }

    public play(): void {
        this._hunger++;
        this._thirst++;
    }

    public get hunger(): number {
        return this._hunger;
    }

    public get thirst(): number {
        return this._thirst;
    }

}

let tiger = new animal();

tiger.drink();
tiger.eat();
tiger.play();
console.log(tiger.hunger);
console.log(tiger.thirst);
import { dirname } from "path";

export class animal {
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

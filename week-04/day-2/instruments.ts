export abstract class Instrument {
    protected _name: string;

    constructor(name: string) {
        this._name = name;
    }

    abstract play(): void;
}

export abstract class StringedInstrument extends Instrument {
    protected _numberOfStrings: number;

    constructor(name: string, numberOfStrings: number) {
        super(name);
        this._numberOfStrings = numberOfStrings;
    }

    abstract sound(): string;

    public play():void {
        console.log(this._name + ", a " + this._numberOfStrings + "-stringed instrument that goes " + this.sound())
    }
}

export class ElectricGuitar extends StringedInstrument {

    constructor(numberOfString: number = 6) {
        super("Electric Guitar", numberOfString)
    }

    public sound(): string {
        return "Twang";
    }
}

export class BassGuitar extends StringedInstrument {

    constructor(numberOfString: number = 4) {
        super("Bass Guitar", numberOfString)
    }

    public sound(): string {
        return "Duum-duum-duum";
    }
}

export class Violin extends StringedInstrument {

    constructor(numberOfString: number = 4) {
        super("Violin", numberOfString)
    }

    public sound(): string {
        return "Screech";
    }
}

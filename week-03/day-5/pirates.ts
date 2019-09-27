export class Pirate {
    private _intoxication: number;
    public health: boolean;
    private _name: string;


    constructor(name: string,intoxication: number = 0, health: boolean = true,) {
        this._name = name;
        this._intoxication = intoxication;
        this.health = health;
    }

    public drinkSomeRum(): void {
        if (this.health == true) {
            this._intoxication++;
        } else { console.log("He is dead") }
    }

    public howIsItGoingMate(): void {
        let xxx = Math.floor(Math.random() * 4);
        if (this._intoxication !== 0) {
            console.log("Pour me anudder!".repeat(xxx));
            this._intoxication += xxx;
        } else if (this._intoxication > 0) {
            console.log("'Arghh, I'ma Pirate. How d'ya d'ink its goin?', the pirate passes out and sleeps it off");
            this._intoxication = 0;
        } else if (this.health == false) {
            { console.log("He is dead") };
        }
    }

    public kill(x): void {
        x.health = false;
        console.log("Hahaha, I killed you");
    }

    public brawl(pirate: Pirate): void {
        let i: number = Math.random();
        if (pirate.health == true) {
            if (i < (1 / 3)) {
                pirate.health = false;
                console.log(`I beat you, ${pirate.name} go hide in your shit-hole!`)
            } else if ((1 / 3) < i && i < (2 / 3)) {
                this.health = false;
            } else if ((2 / 3) < i && i < 1){
                this.health = false;
                pirate.health = false;
            }
        }
    }

    public get name(): string{
        return this._name;
    }

    public die(): void {
        this.health = false;
    }

    public sleepItOff(): void {
        this._intoxication = 0;
    }

    public parrot(x){
        x.this.health = true;
        console.log("Parrot:'You don't get the chance to live'")
    }

    public get intoxicatidness(): number {
        return this._intoxication;
    }
}



let Davy = new Pirate("Davy");
let Joly = new Pirate("Joly");
Davy.brawl(Joly);

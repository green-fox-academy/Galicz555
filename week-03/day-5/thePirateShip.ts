
import { Pirate } from './pirates'

class Ship {
    private _captain: Pirate;
    private _crew: Pirate[];
    private _calculatedScore: number;

    constructor(Captain?: Pirate, Crew: Pirate[] = [], CalculatedScore?: number) {
        this._captain = Captain;
        this._crew = Crew;
        this._calculatedScore = CalculatedScore;
    }

    public fillShip(x: string): void {
        let k: number = Math.round(Math.random() * 69);
        this._captain = new Pirate(x);
        for (let i = 0; i < k; i++) {
            this._crew.push(new Pirate());
        }
    }

    public get captain(): Pirate {
        return this._captain;
    }

    public get crew(): Pirate[] {
        return this._crew;
    }

    public stillAlive() {
        let alive = 0;
        for (let i = 0; i < this._crew.length; i++) {
            if (this._crew[i].alive == true) {
                ++alive;
                ++this._calculatedScore;
            }
        }
        console.log(alive + " of you crew is still alive." );
    }

}

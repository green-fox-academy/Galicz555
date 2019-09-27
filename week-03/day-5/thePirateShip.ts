import { Pirate } from './pirates'

class Ship{
    private _captain: Pirate;
    private _crew: Pirate[];


    constructor(Captain: Pirate, Crew: Pirate[]){
        this._captain = Captain;
        this._crew = Crew;
    }

    public fillShip(){
        this._captain = new Pirate("JackSparrow");
        this._crew.push((new Pirate("")))
    }
}

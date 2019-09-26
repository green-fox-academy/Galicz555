import { animal } from '../day-3/animal'

class Farm {
    private _list: animal[];
    private _slots: number = 10;
    currentNumAnimals: number = 0

    constructor( slots:number, listOfAnimals?: animal[]) {
        this._slots = slots
        if (listOfAnimals) {
            this._list = listOfAnimals;
        } else { this._list = [] };
    }


    breed(animal: animal):void {
        if(this.currentNumAnimals <= this._slots){
        this._list.push(animal);
        }
        this.currentNumAnimals++;
    }

    slaughter() {

    }
}


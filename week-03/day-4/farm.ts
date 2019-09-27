import { animal } from '../day-3/animal'

class Farm {
    private _list: animal[];
    private _slots: number;
    public currentNumAnimals: number = 0;

    constructor(slots: number = 10, listOfAnimals?: animal[]) {
        this._slots = slots
        if (listOfAnimals) {
            this._list = listOfAnimals;
        } else { this._list = [] };
    }

    public breed(): void {
        if (this.currentNumAnimals <= this._slots) {

            this._list.push(new animal);

            this.currentNumAnimals++;
            console.log("Bred a new for you!")
        }
        console.log(this.currentNumAnimals);
    }

    public returnList() {
        return this._list
    }

    public slaughter(): void {
        // let fedStatus = [];
        // let chosen = []
        // for (let i = 0; i < this._list.length; i++) {
        //     fedStatus.push(this._list[i].hunger);
        // }
        // fedStatus.reduce(function (a, b) {
        //     if (a > b) {
        //         return b;
        //     }
        // });
        // for (let i = 0; i < this._list.length; i++) {
        //     if (this._list[i].hunger === fedStatus[0]) {
        //         this._list.slice(i);
        //         chosen.push(this._list[i]);
        //     }
        // }

        // for(let i = 0; i < this._list.length; i++){
        //     if(this._list[i].hunger >){
        //         this._list.slice(this._list_slice[i])
        // }
        // console.log('New meat for dinner!! ' + chosen[0]);
        // delete chosen[0];
        //     if(this._list.length > 0){
        //         let lowestHunger: number;
        //         let fullestAnimal: number;
        //         for(let i: number = 0; i < this._list.length; i++){
        //             if (i = 0){
        //                 lowestHunger = this._list[i].hunger;
        //                 fullestAnimal = i;
        //                 console.log(lowestHunger);
        //                 console.log(fullestAnimal);
        //             }
        //             if (this._list[i].hunger < lowestHunger){
        //                 lowestHunger = this._list[i].hunger;
        //                 fullestAnimal = i;
        //             }
        //         }
        //         this._list.splice(fullestAnimal, 1);
        //     }
        // }
    }
}

let Ranch = new Farm(10);

Ranch.breed();
Ranch.breed();
Ranch.breed();

console.log(Ranch.returnList());

Ranch.returnList()[0].play();

console.log(Ranch.returnList()[0])

Ranch.slaughter();

console.log(Ranch.returnList());


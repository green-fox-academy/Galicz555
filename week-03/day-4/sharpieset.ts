import { Sharpie } from '../day-3/sharpie'


class SharpieSet {
    private _list: Sharpie[];

    constructor(listOfSharpies?: Sharpie[]) {
        if (listOfSharpies) {
            this._list = listOfSharpies;
        } else { this._list = [] };
    }

    public addSharpie(sharpie: Sharpie): void {
        this._list.push(sharpie);
    }
    
    public countUsable (): void {
        let usableSharpies: number = 0;
        for (let i: number = 0; i < this._list.length; i++){
            if(this._list[i].inkAmount > 0){
                usableSharpies++;
            };
        }
        console.log(`The sharpie set contains ${usableSharpies} usable sharpies.`);
    }
    
    public removeTrash (): void {
        for (let i: number = 0; i < this._list.length; i++){
            if(this._list[i].inkAmount == 0){
                this._list.splice(i, 1);
            }
        }
        console.log('The empty sharpies have been removed.');
    }
}

// Creating some sharpies to verify the functions with
let redSharpie = new Sharpie ('red', 5);
let blueSharpie = new Sharpie ('blue', 6);
let greenSharpie = new Sharpie ('green', 8);

// Depleting one for the countUseable and removeTrash functions
while (greenSharpie.inkAmount > 0){
    greenSharpie.use();
}
// console.log(magentaSharpie.inkAmount);

let pencilcase = new SharpieSet();

pencilcase.addSharpie(redSharpie);
pencilcase.addSharpie(blueSharpie);
pencilcase.addSharpie(greenSharpie);

pencilcase.countUsable();

pencilcase.removeTrash();

console.log(pencilcase);

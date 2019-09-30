
class Plants {
    protected _waterAmount: number;
    protected _thirstLevel: number;
    protected _absorption: number;
    protected _color: string;



    constructor(waterAmount: number, thirstLevel: number, absorption: number, color: string) {
        this._waterAmount = waterAmount;
        this._thirstLevel = thirstLevel;
        this._absorption = absorption;
        this._color = color;
    }

    public waterAmount(): number {
        return this._waterAmount;
    }

    public thirstLevel(): number {
        return this._thirstLevel;
    }

    public status(): void {
    }

    public watering(water: number): void {
        this._waterAmount += water * this._absorption
    }
}

class Flower extends Plants {

    constructor(color: string) {
        super(0, 5, 0.75, color);
    }

    public status(): void {
        if (this._waterAmount < 5) {
            console.log("The " + this._color + " Flower needs water")
        } else {
            console.log("The " + this._color + " Flower doesn't need water")
        }
    }
}

class Tree extends Plants {

    constructor(color: string) {
        super(0, 10, 0.4, color);
    }

    public status(): void {
        if (this._waterAmount < 10) {
            console.log("The " + this._color + " Tree needs water")
        } else {
            console.log("The " + this._color + " Tree doesn't need water")
        }
    }
}


class Garden {
    private _plants: Plants[];

    constructor(plants: Plants[] = []) {
        this._plants = plants;
    }

    public addPlant(plant: Plants): void {
        this._plants.push(plant);
    }

    public statusAll() {
        this._plants.forEach(element => element.status());
    }

    public wateringAll(wateringAmount) {
        console.log("Watering with " + wateringAmount);
        let thirstyPlants: Plants[] = [];
        this._plants.forEach(element => {
            if (element.waterAmount() < element.thirstLevel()) {
                thirstyPlants.push(element);
            }
        })
        thirstyPlants.forEach(element => element.watering(wateringAmount / thirstyPlants.length));
    }
}



let jungle = new Garden();
jungle.addPlant(new Flower("Yellow"))
jungle.addPlant(new Flower("blue"));
jungle.addPlant(new Tree("purple"));
jungle.addPlant(new Tree("orange"));
jungle.statusAll();
jungle.wateringAll(40);
jungle.statusAll();
jungle.wateringAll(70);
jungle.statusAll();
console.log(jungle)



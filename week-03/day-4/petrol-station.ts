class Station {
    _gasAmount: number = 1000;

    public refill(Car: Car) {
        this._gasAmount -= Car._capacity;
        Car._gasAmount += Car._capacity;
    }
}

class Car {
    _gasAmount: number;
    _capacity: number;

    constructor(initialize_gasAmount: number = 0, initialize_capacity: number = 100) {
        this._gasAmount = initialize_gasAmount;
        this._capacity = initialize_capacity;
    }
}

let shell = new Station();
let audi = new Car()

shell.refill(audi);
console.log(shell._gasAmount);
console.log(audi._gasAmount);
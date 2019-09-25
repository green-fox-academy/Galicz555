class Counter {
    private _integer: number;
    private _currentValue: string

    constructor(integer: number = 0) {
        this._integer = integer;
    }

    public add(element?: number): void {
        if (element) {
            this._integer += element;
        } else {
            this._integer++;
        }
    }

    public get() {
        console.log(this._integer.toString());
    }

    public get integer(): number {
        return this._integer
    }



    public reset() {
        return this._integer = 0;
    }



}

let Counter1 = new Counter();
Counter1.add();
Counter1.add(6);
Counter1.add();
Counter1.get();
Counter1.reset()

console.log(Counter1.integer);
Counter1.get();
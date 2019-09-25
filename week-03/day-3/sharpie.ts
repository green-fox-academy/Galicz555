class Sharpie {
    private _color: string;
    private _width: number;
    private _inkAmount: number;

    constructor (color: string, width: number, inkAmount: number = 100){
        this._color = color;
        this._width = width;
        this._inkAmount = inkAmount;
    }

    public use(){
        this._inkAmount--;
    }
}

let Sharpie1 = new Sharpie("black", 30);
Sharpie1.use();

console.log(Sharpie1);
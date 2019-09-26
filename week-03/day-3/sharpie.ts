export class Sharpie {
    private _color: string;
    private _width: number;
    public inkAmount: number;

    constructor (color: string, width: number, inkAmount: number = 100){
        this._color = color;
        this._width = width;
        this.inkAmount = inkAmount;
    }

    public use(){
        this.inkAmount--;
    }
}

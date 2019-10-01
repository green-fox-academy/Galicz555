import { inherits } from "util";

abstract class Animal {
    protected _name: string;
    protected _age: number;
    protected _gender: string;
    protected _thirstLevel: number;
    protected _hungerLevel: number;


    constructor(name: string, age: number = 10, gender: string = "female", thirstLevel: number = 50, hungerLevel: number = 50) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._thirstLevel = thirstLevel;
        this._hungerLevel = hungerLevel;
    }

    getName(): string {
        return this._name;
    }

    play() {
        ++this._hungerLevel;
        ++this._thirstLevel;
    }

    abstract breed(): void;

    eat(): void {
        --this._hungerLevel;
    }

    drink(): void {
        --this._thirstLevel;
    }
}

class Mammal extends Animal {
    protected _furLength: number;
    protected _numOfArmsAndLegs: number;

    constructor(name: string, furLength: number = 10, numOfArmsAndLegs: number = 4) {
        super(name);
        this._furLength = furLength;
        this._numOfArmsAndLegs = numOfArmsAndLegs;
    }

    public breed() {
        return "pushing miniature versions out.";
    }


}

class Reptile extends Animal {
    constructor(name: string) {
        super(name)
    }

    public breed() {
        return "laying eggs.";
    }
}

export class Bird extends Animal {
    constructor(name: string) {
        super(name)
    }

    public breed() {
        return "laying eggs.";
    }
}











const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);

console.log(reptile);
reptile.play();
reptile.drink();
console.log(reptile);
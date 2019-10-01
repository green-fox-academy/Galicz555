import { Bird } from "../day-2/zoo"

interface Flyable {
    land(): void;
    fly(): void;
    takeOff(): void;
}

abstract class Vehicle{
    protected _numOfWings: number;
    protected _numOfEngines: number;
    protected _numOfVehicles: number;
}

class Helicopter extends Vehicle implements Flyable{

}

class Bird implements Flyable {
    
}
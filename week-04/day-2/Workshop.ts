import { Instrument } from '../day-2/instruments'
import { StringedInstrument } from '../day-2/instruments'
import { ElectricGuitar } from '../day-2/instruments'
import { BassGuitar } from '../day-2/instruments'
import { Violin } from '../day-2/instruments'


console.log(
    'Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.'
);
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log(
    'Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings.'
);
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();
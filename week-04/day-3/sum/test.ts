import { Numbers } from "../sum/sum"
import * as test from 'tape'



test("add numbers of array", t => {
    let numberArray = new Numbers();
    let integers: number[] = [1, 6, 9, 32, 67, 98];
    let actual: number = numberArray.sum(integers);
    let expected: number = integers[0] + integers[1] + integers[2] + integers[3] + integers[4] + integers[5];

    t.equal(actual, expected);
    t.end();
});

test("add numbers of array", t => {
    let numberArray = new Numbers();
    let integers: number[] = [];
    let actual: number = numberArray.sum(integers);
    let expected: number = 0;

    t.equal(actual, expected);
    t.end();
});

test("add numbers of array", t => {
    let numberArray = new Numbers();
    let integers: number[] = [1];
    let actual: number = numberArray.sum(integers);
    let expected: number = integers[0];

    t.equal(actual, expected);
    t.end();
});
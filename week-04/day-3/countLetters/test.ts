import { letterCount } from "../countLetters/countLetters"
import * as test from 'tape'



test("count letters test", t => {
    let str1: string = JSON.stringify(letterCount("Banana"))
    let actual = str1;
    let expected= '{"a":3,"b":1,"n":2}'
    t.equal(actual, expected);
    t.end();
});



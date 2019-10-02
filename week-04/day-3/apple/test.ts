import { Apple } from "../day-3/apple"
import * as test from 'tape'



test("test apple's method", t => {
    let Jona = new Apple();
    let actual: string = Jona.getApple();
    let expected: string = "apple";

    t.equal(actual, expected);
    t.end();
});
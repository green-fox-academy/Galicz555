import { fibonacci } from "../fibonacci/fibonacci"
import * as test from 'tape'



test("fibonacci test", t => {
    t.equal(fibonacci(4), 3);
    t.end();
});



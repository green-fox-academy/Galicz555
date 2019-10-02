import { anagramm } from "../anagram/anagram"
import * as test from 'tape'



test("anagram test", t => {
    let actual = anagramm("evil", "live");
    let expected: boolean = true;
    t.equal(actual, expected);
    t.end();
});
export function anagramm(a: string, b: string) {
    let aStringSorted = a.split("").sort();
    let bStringSorted = b.split("").sort();
    if (aStringSorted.length != bStringSorted.length) {
        return false;
    }

    for (let i = 0; i < aStringSorted.length; i++) {
        if (aStringSorted[i] != bStringSorted[i]) {
            return false;
        }
    }
    return true;
}


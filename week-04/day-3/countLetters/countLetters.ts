
export function letterCount(string: string): any {
    let dictionary: any = {};

    string.toLocaleLowerCase().replace(/\s/g, '').split('').sort().forEach(function (letter) {
        if (!dictionary[letter]) { dictionary[letter] = 0; }
        dictionary[letter]++;
    });

    return dictionary;
}

console.log(letterCount("banana"))
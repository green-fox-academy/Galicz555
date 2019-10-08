'use strict'

// Create a map with the following key-value pairs.
let telephoneBook = {
    "William A. Lathan": "405-709-1865",
    "John K. Miller": "402-247-8568",
    "Hortensia E. Foster": "606-481-6467",
    "Amanda D. Newland": "319-243-5613",
    "Brooke P. Askew": "307-687-2982",
}

// Create an application which solves the following problems.
// What is John K. Miller's phone number?
// Whose phone number is 307-687-2982?
// Do we know Chris E. Myers' phone number?

function application2(something) {
    console.log(telephoneBook["John K. Miller"])

    let names: string[] = Object.keys(something);
    let findName: string = "";
    for (let i = 0; i < names.length; i++) {
        if (telephoneBook[names[i]] == "307-687-2982") {
            findName = names[i];
        }
    };
    console.log('The number 307-687-2982 belongs to ' + findName)

    console.log(telephoneBook.hasOwnProperty("Chris E. Myers"));
}

application2(telephoneBook);

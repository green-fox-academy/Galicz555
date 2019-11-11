"use strict";

// Number converter
// It occurs now and then in real life that people want to write about money, especially about a certain amount of money. If it comes to cheques or contracts for example some nations have laws that state that you should write out the amount in words additionally to the amount in numbers to avoid fraud and mistakes. So if you want to transfer 745 $ to someone via cheque you have to fill out to fields:

// 745.00 $ (amount in numbers)

// seven hundred and fourty five dollars (amount in words)

// The Kata is now to write a little converter class or function (depends on your favourite language and flavour) to convert numbers into words.
// Convert it back.

let converter = (number) => {
    let numbers = [
        { value: "0", single: '', teen: '', double: '' },
        { value: "1", single: 'one', teen: 'eleven', double: 'ten' },
        { value: '2', single: 'two', teen: 'twelve', double: 'twenty' },
        { value: '3', single: 'three', teen: 'thirteen', double: "thirty" },
        { value: '4', single: 'four', teen: 'fourteen', double: 'fourty' },
        { value: '5', single: 'five', teen: 'fifteen', double: 'fifty' },
        { value: '6', single: 'six', teen: 'sixteen', double: "sixty" },
        { value: '7', single: 'seven', teen: 'seventeen', double: 'seventy' },
        { value: '8', single: 'eight', teen: 'eighteen', double: 'eighty' },
        { value: '9', single: 'nine', teen: 'nineteen', double: "ninety" },
    ]
    let splitNumber = number.toString().split('');

    let returnString = '';

    for (let i = splitNumber.length; i > 0; i--) {
        if (i == 1 && splitNumber.length == 1) {
            returnString += `${numbers[parseInt(splitNumber[i-1])].single} dollars`;
        } else if (i == 2 && splitNumber[splitNumber.length - 2] == '1') {
            returnString += `${numbers[parseInt(splitNumber[i-1])].teen} dollars`;
        } else if (i == 2 && splitNumber[splitNumber.length - 2] != '1') {
            returnString += `${numbers[parseInt(splitNumber[i-1])].double} `;
            if (splitNumber[splitNumber.length - 1] == '0') {
                returnString = returnString.slice(0, -1)
            }
            returnString += `${numbers[parseInt(splitNumber[i])].single} dollars`;
        } else if (i == 3) {
            returnString += `${numbers[parseInt(splitNumber[0])].single} hundred and `;
        }
    }

    return returnString;
}

module.exports = { converter };
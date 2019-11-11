'use strict';

// Create a function that takes two strings, and returns a boolean that should be True if the strings are anagrams and False otherwise.

function checker(word1, word2) {
    let array1 = word1.toLowerCase().split("").sort().join('');
    let array2 = word2.toLowerCase().split("").sort().join('');
    return array1 === array2 ? true : false;
};

module.exports = { checker };
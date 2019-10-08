'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
todoText = todoText.substring(0) + "My todo:\n" + todoText.substring(1);
todoText = todoText.substring(0) + "- Download games\n";
todoText = todoText.substring(0) + "\t - Diablo";
// todoText = todoText.substring(0) + " - Diablo:" + todoText.substring(0);

console.log(todoText);
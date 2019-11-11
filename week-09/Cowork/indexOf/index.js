"use strict";

function search(array, element) {
    let returnValue = -1;
    array.forEach(bodyPart => {
        if (bodyPart.toString().toLowerCase() == element.toString().toLowerCase()) {
            returnValue = array.indexOf(bodyPart);
        }
    })

    return returnValue;
    // let newArray= [];
    // for(let i = 0; i < array.length; i++){
    //     console.log(array[i].toLowerCase());
    //     newArray.push(array[i].toLowerCase());
    // }
    // return newArray.indexOf(element.toLowerCase());
}

module.exports = { search };
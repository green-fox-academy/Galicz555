
// Real Map introduction

let myMao = new Map([["fname", "Chandler"], ["lname", "Bing"]]);
console.log(myMao);
myMao.forEach(mapFunction);
function mapFunction(value, key, callingMap) {
    console.log(key + " " + value);
    console.log(myMao === callingMap);
}

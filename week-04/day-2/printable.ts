import { domino } from "./domino"

interface Printable {
    printAllFields(): void;
}



let dominoes = []; //??
let todos = []; //??

for (let domino of dominoes) {
    domino.printAllFields();
}

for (let todo of todos) {
    todo.printAllFields();
}

class domino implements Printable{

}
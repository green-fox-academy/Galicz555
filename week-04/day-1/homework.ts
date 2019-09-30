class Person {
    private _name: string;
    private _age: number;
    private _gender: string;

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female") {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender);
    }

    public getGoal() {
        console.log("My goal is: Live for the moment!")
    }
}

class Student {
    private _name: string;
    private _age: number;
    private _gender: string;
    private _previousOrganization: string;
    private _skippedDays: number;

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", previousOrganization: string = "The School of Life", skippedDays: number = 0) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._previousOrganization = previousOrganization;
        this._skippedDays = skippedDays;
    }

    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + " from " + this._previousOrganization + " who skipped " + this._skippedDays + " days from the course already.");
    }

    public getGoal() {
        console.log("Be a junior software developer.")
    }

    public skipDays(numberOfDays) {
        this._skippedDays += numberOfDays;
    }
}

class Mentor {
    private _name: string;
    private _age: number;
    private _gender: string;
    private _level: string;

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", level: string = "intermediate") {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._level = level;
    }

    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + " " + this._level);
    }

    public getGoal() {
        console.log("Educate brilliant junior software developers.")
    }
}

class Sponsor {
    private _name: string;
    private _age: number;
    private _gender: string;
    private _company: string;
    private _hiredStudents: number;

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", company: string = "Google", hiredStudents: number = 0) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._company = company;
        this._hiredStudents = hiredStudents;
    }

    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + " who presents " + this._company + " and hired " + this._hiredStudents + " students so far");
    }

    public getGoal() {
        console.log("Hire brilliant junior software developers.")
    }

    public hire() {
        ++this._hiredStudents;
    }
}


let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
    elon.hire();
}

for (let i = 0; i < 4; i++) {
    sponsor.hire();
}

people.forEach((person) => {
    person.introduce();
    person.getGoal();
});

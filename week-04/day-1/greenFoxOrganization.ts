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
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + this.specificIntroduction());
    }

    protected specificIntroduction(): string {
        return "";
    }

    public getGoal() {
        console.log("My goal is: Live for the moment!")
    }
}

class Student extends Person {
    private _previousOrganization: string;
    private _skippedDays: number;

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", previousOrganization: string = "The School of Life", skippedDays: number = 0) {
        super(name, age, gender);
        this._previousOrganization = previousOrganization;
        this._skippedDays = skippedDays;
    }

    protected specificIntroduction(): string {
        return " from " + this._previousOrganization + " who skipped " + this._skippedDays + " days from this course already.";
    }

    public getGoal() {
        console.log("Be a junior software developer.")
    }

    public skipDays(numberOfDays) {
        this._skippedDays += numberOfDays;
    }
}

class Mentor extends Person {
    private _level: string;

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", level: string = "intermediate") {
        super(name, age, gender)
        this._level = level;
    }

    protected specificIntroduction(): string {
        return "" + this._level;
    }

    public getGoal() {
        console.log("Educate brilliant junior software developers.")
    }
}

class Sponsor extends Person {
    private _company: string;
    private _hiredStudents: number;

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", company: string = "Google", hiredStudents: number = 0) {
        super(name, age, gender)
        this._company = company;
        this._hiredStudents = hiredStudents;
    }

    protected specificIntroduction(): string {
        return " who represents " + this._company + " and hired " + this._hiredStudents + " students so far.";
    }

    public getGoal() {
        console.log("Hire brilliant junior software developers.")
    }

    public hire() {
        ++this._hiredStudents;
    }
}

class Cohort {
    private _name: string;
    private _students: Student[];
    private _mentors: Mentor[];


	constructor(name: string, students: Student [] = [], mentors: Mentor [] = []) {
        this._name = name;
        this._students =  students;
        this._mentors = mentors;
	}


    public addStudent(student: Student): void{
        this._students.push(student);
    }

    public addMentor(mentor: Mentor): void{
        this._mentors.push(mentor);
    }

    public info(){
        console.log("The " + this._name + " cohort has " + this._students.length + " students and " + this._mentors.length + " mentors.")
    }
}

let Chama = new Cohort("Chama");
Chama.info();
Chama.addMentor(new Mentor);
Chama.info();
Chama.addStudent(new Student);
Chama.info();

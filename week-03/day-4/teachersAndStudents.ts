class teacher {
    public teach(student){
        student.learn()
    }

    public answer(){
        console.log("Teacher is answering some question.")
    }

}

class student {

    public learn(){
        console.log("Student is learning something new.")
    }

    public question(teacher){
        teacher.answer()
    }
}

let Zsuzsi = new teacher;
let Misi = new student;

Misi.question(Zsuzsi);
Zsuzsi.teach(Misi);
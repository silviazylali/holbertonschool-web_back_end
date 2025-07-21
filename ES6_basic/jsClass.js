class Student {

    constructor() {
        this.studentName = "John Doe";
    }

    sayHello() {
        return "Hello, I am a student!";
    }

    getDetails() {
        return this.sayHello() + this.studentName;
    }
}


const student = new Student();
console.log("student",student);
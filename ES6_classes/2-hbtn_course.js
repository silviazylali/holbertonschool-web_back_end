export default class HolbertonCourse {
    constructor(name, length, students) {

        if (typeof name === 'string'){
            this.name = name;
        } else {
            throw new Error('Name must be a string');
        }

        if (typeof length === 'number'){
            this._length = length;
        } else {
            throw new Error('Length must be a number');
        }

        if (Array.isArray(students)){
            this._students = students;
        } else {
            throw new Error('Students must be an array of strings');
        }
    }
    get name() {
        return this._name;
    }
    get length(){
        return this._length;
    }
    get students(){
        return this._students;
    }

    set name(name){
        if (typeof name === 'string'){
            this.name = name;
        } else {
            throw new Error('Name must be a string');
        }
    }

    set length(length){
        if (typeof length === 'number'){
            this.length = length;
        } else {
            throw new Error('Length must be a number');
        }
    }

    set students(students){
        if (Array.isArray(students)){
            this._students = students;
        } else {
            throw new Error('Students must be an array of strings');
        }
    }
    
}
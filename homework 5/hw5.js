//  task 1


function propsCount(course, duration, direction){
    this.course = course;
    this.duration = duration;
    this.direction - direction;
return propsCount.length;
}
let mentor = new propsCount('JS fundamental', '3', 'web development');

// task 2

let obj = {
    name: 'John',
    lastname: 'Johnson',
    age: 27,
    position: 'developer',
    salary: 2000

}
function showProps(obj){
    console.log(Object.values(obj));;
}
console.log(showProps(obj));

//task 3

class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
        this.fullName = function () {
            return this.name + " " + this.surname;
        }
    }
    get fullName(){
        return this.name + " " + this.surname;
    }
    set fullName(value){
        return;
    }
    showFullName() {
        return this.name + this.surname;
    }

}
let person = new Person('John', 'Johnson');
person.showFullName(); 

class Student extends Person {
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
        this.midleName = function(){
            'Petrovych'
        }
    }
    showFullName(){
        alert(this.name + this.surname + this.midleName);
    }
    showCourse(){
        
        result = 2021 - this.year;
        return result;
    }
}
let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse()); 

//task 4
class Worker {
   
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;

    }
    #experience = 1.2

showSalary() {
    alert(this.dayRate * this.workingDays);
}


showSalaryWithExperience(){
    
    alert(this.dayRate * this.workingDays * this.#experience);
}
}

//task 5
class GeometricFigure {
    constructor(){}
    getArea() {}
    toString(){
        
    }
}

class Triangle extends GeometricFigure{
    constructor(height, side){
        this.height = height;
        this.side - side;
    }
    getArea(){
       return this.height * this.side;
    }
}
class Square extends GeometricFigure{
    constructor(side1, side2){
        this.side1 = side1;
        this.side2 = side2;
    }
    getArea(){
        return this.side1 * this.side2;
    }
}
class Circle extends GeometricFigure{
    constructor(r){
        this.r = r;
    }
    getArea(){
        let p = 3.14;
        this.r ** 2 * p;
    }
}

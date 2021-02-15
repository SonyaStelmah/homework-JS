//  task 1
/*

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
      
        }
    
    get fullName(){
        return this.name + ' ' + this.surname;
    }
}
 

class Student extends Person {
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    
    }
    showFullName(midleName){
        return super.showFullName() + ' ' + midleName;
    }
    showCourse(){
        
        let date = new Date();
        let currentYear = date.getFullYear();
        return currentYear - this.year;
    }
}
let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse()); 
*/
//task 4
class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;

    }
   

showSalary() {
    console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
}


showSalaryWithExperience(){
    
    console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays * this.#experience}`);
}

showSalaryWorker(){
    return `${this.dayRate * this.workingDays * this.#experience}`;
}
get showExp(){
    return this.#experience;
}
set setExp(experience){
    this.#experience = experience;
}
sortSalaries(workersArray){
    let sortedSalary = workersArray.sort(function(a, b) {
        return a.showSalaryWorker() - b.showSalaryWorker();
    })
    for(let i = 0; i < sortedSalary.length; i++) {
        console.log(sortedSalary[i].fullName + ': ' +sortedSalary[i].showSalaryWorker());
    }
}

}

let worker1 = new Worker('John Johnson', 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log('New experience: ' + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker ('Tom Tomson', 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log('New experience: ' + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker ('Andy Ander', 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log('New experience: ' + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
 
function sortedSalaries(workersArray) {
                
    let sortedSalary = workersArray.sort(function(a, b) {
        return a.showSalaryWorker() - b.showSalaryWorker();
    })
    console.log(sortedSalary);
    for (let i = 0; i < sortedSalary.length; i++) {
        console.log(sortedSalary[i].fullName + ": " + sortedSalary[i].showSalaryWorker());
    }
}
let workersArray = [worker1, worker2, worker3];
        worker3.sortSalaries(workersArray);
  
/*
//task 5
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString(){
        return Object.getPrototypeOf(this).constructor.name;
    }
        
    }

class Triangle extends GeometricFigure {
    constructor(height, base){
        super();
        this.height = height;
        this.side - base;
    }
    getArea(){
       return this.height * this.base;
    }
}
class Square extends GeometricFigure {
    constructor(a){
        super();
        this.side = a;
    }

    getArea(){
        return this.side ** 2; 
    }
}
class Circle extends GeometricFigure{
    constructor(r){
        super();
        this.radius = r;
    }
    getArea(){
        return Math.PI * this.radius ** 2;
    }
}

function handleFigures(figures){
    return figures.reduce(function(sum, figure){
        if (figure instanceof GeometricFigure) {
            console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
            return sum + figure.getArea()
        }
        throw Error('Bad argument figure');
    }, 0);
}

const figures = [new Triangle(5,7), new Square(9),new Circle(3)];
console.log(handleFigures(figures));
*/
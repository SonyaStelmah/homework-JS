//task 1
function calcRectangleArea(width, heigth) {
    let rectArea = width * heigth;
    if (isNaN(width) || isNaN(heigth)) {
        throw 'is NaN';
    }
    console.log(rectArea);
}
try {
    calcRectangleArea(4, 'x');
} catch (exception) {
    console.error(exception)
}

//task 2

    function checkAge() {
        let userAge = prompt("Enter your age", "");
        if (userAge < 14) {
            throw new Error("You are too young");
        } else if (isNaN(userAge)) {
            throw new Error("This is not a number");
        } else if (userAge == null) {
            throw new Error ("This field is empty");
        }
            
    }

 try{
     checkAge();
 } catch (exception) {
     console.log(exception.stack);
 }

 //task 4
 function ShowUserId (id){
    this.id= id;
if (id < 0){
throw new Error("Must not be negative");
}
}
let name = new ShowUserId ("Sonya");


function ShowUsers(ids) {
    let ids = [];
}
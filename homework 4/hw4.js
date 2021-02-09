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
        } else if (isNaN(parseInt(userAge))) {
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

 // task 3
 class MonthException {
    constructor(message) {
        this.message = message;
        this.name = 'MonthException';
    }
 }
 function showMonthName(monthNumber) {
     monthNumber = monthNumber - 1;
     let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
     if (months[monthNumber] !== undefined) {
         return months[monthNumber];
     } else {
         throw new MonthException('Wrong month number');
     }
 }
 try {
     let someMonth = 17;
     let monthName = showMonthName(someMonth);
     console.log(monthName);
 } catch(exception) {
     console.error(exception.name, exception.message);
 }

 //task 4
 function ShowUserId (id){
    this.id= id;
if (id < 0){
throw new Error("Must not be negative" + id); 
}
return {id: id};
}


function ShowUsersIds(ids) {
    let result = [];
    ids.forEach(function(id){
        try {
            let user = ShowUserId(id);
            result.push(user);   
        } catch (exception) {
         console.log(exception.message);
        }
    });
    return result;
}
ShowUsersIds([2, -8, 44, 58]);
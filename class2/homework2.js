/*/task 1
let x = 1;
let y = 2;
let res1 = x + "2";
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = true + "2"
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = "x"<"y"
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseInt(Boolean(x + y)) 
console.log(res4); // NaN
console.log(typeof res4); // "number"

//task 2.a
let naame = prompt("Type a number", "");
alert(naame);

if (naame >=0) 
if(naame % 2==0) {
    console.log(naame);
 }

//task 2.b 
/*let naame = prompt("Type a number", "");
alert(naame);
if (naame % 7 ==0){
    console.log(naame);
}*/

//task 3
let data = ["4","text","true","null"];
console.log(data.length);
let arr = prompt("Type any number", "");

data.push(arr);
alert(arr);
data.shift("4");
document.write(data);

//task 4
let cities = ["Rome", "Lviv", "Warsaw"]; 
console.log(cities.join("*"));

//task 5
let isAdult = prompt("What is your age?", "");
if (isAdult > 18){
    alert("You are an adult")
} else if (isAdult < 18){
    alert("You are too young")
}

//task 6

let oneSide = prompt("Enter the lenght of the first side", "");
let secondSide = prompt("Enter the lenght of the second side", "");
let thirdSide = prompt("Enter the lenght of the third side", "");

if (thirdSide * thirdSide == oneSide*oneSide + secondSide*secondSide){
    console.log("Triangle is right" || oneSide*secondSide*thirdSide);
} else if(thirdSide * thirdSide != oneSide*oneSide + secondSide*secondSide) {
    console.log("Triangle is NOT right");
}
console.log(oneSide*secondSide*thirdSide);



//task 7

var h=(new Date()).getHours();
if (h > 23 || h <5) document.write('Доброї ночі! :)') ;
if (h > 5 && h < 11) document.write('Доброго ранку! :)'); 
if (h > 11 && h < 17) document.write('Доброго дня!'); 
if (h > 17 && h < 23) document. write('Доброго вечора!');

day = new Date(); 
hour = day.getHours(); 
if (hour>=23 && hour<5) greeting = "Доброї ночі";
 else { if (hour>5 && hour<11) greeting = "Доброго ранку"; 
else { if (hour>11 && hour<17) greeting = "Доброго дня";
 else { if (hour>17 && hour<23) greeting = "Доброго вечора"; } } } document.write(greeting);
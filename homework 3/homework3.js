//task 1
let result = 1;
let arr = [2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
	result = result * arr[i];
}
alert(result); 

const arr = [2, 3, 4, 5]
let counter = 0;
let res = 1;
while (counter < arr.length) {
    res *= arr[counter];
    counter += 1;
};
console.log(res);

//task 2 
let a = 0
for (a = 0; a <= 15; a++) {
    if (a % 2 !==0) {
        console.log(a + " is odd");
    } else if (a % 2 ==0){
        console.log(a + " is even");
    }
}

//task 3
function randArray(k){
const array = [];

    for (i = 0; i < k; i++) {
        array.push(Math.round(Math.random()*500));
    };

    return array;
}

console.log(randArray(5));


//task 4 
function raiseToDegree() {
    let x = prompt("Enter the base");
    let y = prompt("Enter the power");
    let result = Math.pow(x,y);
    alert("The result is" + result);
}

//task 5
function findMin(input) {
    if (toString.call(input) !== "[object Array]")  
      return false;
 return Math.min.apply(null, input);
   }


//task 6 
function findUnique(arr)
{   
    let n = arr.length;   
    for (let i = 1; i < n; i++)
      { if (arr[i-1] === arr[ i ]) return false; } 
    return true;
}

//task 7
function theLastOne(arr) {
    return arr[arr.length - 1];
}
console.log(theLastOne([3, 4, 7, 8]))

//task 8 
let string = 'I love java script';

console.log(
string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
);


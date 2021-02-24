//task 1

// function upperCase(str) {
//     regexp = /^[A - Z]/;
//     if (regexp.test(str))
//     {
//         console.log("String starts with uppercase character")
//     }
//     else
//     {
//         console.log("String do not starts with uppercase character")
//     }
// }
// upperCase('regexp');
// upperCase('RegExp');

//task 2
// function checkEmail(data){
//     let regExp = /\S+@\S+\.\S+/;
//     console.log(regExp.test(data));
// }
// checkEmail("Qmail2@gmail.com");

//task 3
let myRe = /d(b+)(d)/i;
let arr = myRe.exec("cdbBdbsbz");
console.log(arr);

//task 4
let regulExp = /(\w+)\s(\w+)/;
let text = "Java Script";
let newText = text.replace(regulExp, "$2, $1");
console.log(newText);

//task 5
function cardValidation(str){
    let regExp = /^\d{4}-\d{4}-\d{4}-\d{4}\b/;
    let result = regExp.test(str);
    if (result) {
        console.log("Validation successful");
    } else {
        console.log("Validation is not successful");
    }
}
cardValidation("4577-5548-4561-2547")
cardValidation("4577-55448-4561-2547")
cardValidation("4577-5548-4561-25f47")

//task 6
function checkEmail(str){
    let mailExp = /^[a-zA-z0-9]+([-]?\w+)*@\w+([-]?w+)*(\.\w{2,3})+$/;
    if (mailExp.test(str))
    {
        console.log("Email is correct");
    } else {
        console.log("Email is wrong");
    }
}
checkEmail("my_mail@gmail.com");
checkEmail("#my_mail@gmail.c_m");

//task 7
function checkLogin(data) {
    let re = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
    let number = /[0-9\.]+/g;
    let resultNumber = data.match(number);
    let result = re.test(data);
    console.log(`${data} is ${result} - ${resultNumber}`);
}
checkLogin("ee1.1ret3")
checkLogin("ee1*1ret3")


// 1.  Defining and Orgainizing the Variable


var generateBtn = document.querySelector("#generate");
// Used the let command to declare my variable
let userCharac = [];;
let userPassword = [];

let numberCharc = "0123456789"
let upperCharc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCharc = "abcdefghijklmnopqrstuvwxyz"
let specialCharc = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Password Function

let length = prompt("Enter the length of your userPassword. *Minimum of 8 characters, the limit is 128 characters");
console.log(length);

let numbers = confirm("If you want numbers select 'Ok' ")
if(numbers) {
    userCharac.push(...numberCharac);
}
console.log(numbers)

let upper = confirm();
if(upper) {
    userCharac.push(...upperCharac);
}
console.log(upper);

let lower = confirm();
if(lower) {
    userCharac.push(...lowerCharac);
    
}




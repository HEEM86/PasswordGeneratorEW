

// 1.  Defining and Orgainizing the Variable


var generateBtn = document.querySelector("#generate");
// Used the let command to declare my variable
let userCharc = [];;
let userPassword = [];

let numberCharc = "0123456789"
let upperCharc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCharc = "abcdefghijklmnopqrstuvwxyz"
let specialCharc = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Password Function
function writePassword() {

let length = prompt("Enter the length of your userPassword. *Minimum of 8 characters, the limit is 128 characters");
console.log(length);

let numbers = confirm("If you want numbers select 'Ok' ")
if(numbers) {
    userCharc.push(...numberCharc);
}
console.log(numbers)

let upper = confirm("If you want Upper Case select 'Ok' ");
if(upper) {
    userCharc.push(...upperCharc);
}
console.log(upper);

let lower = confirm("If you want Lower Case select 'Ok' ");
if(lower) {
    userCharc.push(...lowerCharc);   

}
console.log(lower);

let special = confirm("If you want Special Characters select 'Ok' ");
if(special) {
    userCharc.push(...specialCharc);
} else {
    alert("No options was chosen. Please click generate password to start again")
}
console.log(special);

console.log(userCharc);

// The password randomizer loop

for (var i = 0; i < length; i++){
    userPassword.push(userCharc[Math.floor(Math.random() * userCharc.length)]);
    console.log(userPassword.join("+"));

    // Shows password in the textarea

    document.getElementById("password").value = userPassword.join("")

}
}
    // Connecting an event lister to generate button
    generateBtn.addEventListener("click", writePassword);
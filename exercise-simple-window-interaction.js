
/*********************************************

***************GROUP WORK EXCERCISE***********

*********************************************/

// #1
let userName = prompt('What is your name?');
console.log(userName);
 
// #2
let birthYear = parseInt(prompt("What is your year of birth?"));
console.log(birthYear);
 
// #3
const currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log(age);
 
// #4
const numberOne = parseInt(prompt("Enter a number:"));
const numberTwo = parseInt(prompt("Enter another number:"));
 
// #5
let sum = numberOne + numberTwo;
console.log(`The sum of ${numberOne} and ${numberTwo}: ${sum}`);
 
let difference = numberOne - numberTwo;
console.log(`The difference between ${numberOne} and ${numberTwo}: ${difference}`);
 
let product = numberOne * numberTwo;
console.log(`The multiplication of ${numberOne} and ${numberTwo}: ${product}`);
 
let quotient = numberOne / numberTwo;;
console.log(`The division of ${numberOne} and ${numberTwo}: ${quotient}`);
 
// #6
//alert('Beräkningarna är klara och att de kan kontrollera konsolen för resultaten');
alert("Calculations complete. Check console for results.");
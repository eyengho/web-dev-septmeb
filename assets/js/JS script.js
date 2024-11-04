// let userPass = prompt("Enter your password");

// let storedPass = "stored1234";
// if (userPass === storedPass) {
//     alert("Login successful");
// } else {
//     if (!userPass){
//         userPass = prompt("Enter your password");
//         alert("Invalid password entered...");
//     }

// }

let x = 10;
x += 90;

console.log(x);

let fullName = "John";

fullName += " Peter";
console.log(fullName);

let price = 50000;
let deduction = 3000;
price -= deduction;
console.log(price);

let discount = 0.8;
price *= discount; //This will multiply 50000 by 0.8
console.log("The discount is " + price);

let varName = 56; //Return udefined if value is not assigned to it
if (varName === undefined) {
    console.log("Value has not been assigned to the variable");
} else {
    console.log("Value of the variable is",varName);
}
let n =100;
n **=2;
console.log("n iss :",n);

let lastName = 'Juliana';
console.log(typeof lastName);

if( typeof lastName ==="string"){
    console.log('my string is' , lastName);
}else {
    console.log("Is it not a string..");
}

let scores = 50;
console.log(typeof score);

//Boolean: returns true or false
console.log(!true);//false
console.log(4 === 5);//false
console.log(4 > 5);//fasle
console.log('5' == 5);//true
console.log('0' ==0);//true
console.log('34'=== 34);//false
let age = 18;
let tax = fasle;
console.log(age === 18 && tax == false);
console.log(age === 16 && tax == false);

let ATMPin = '2456';
let userPin = '2333';
console.log(ATMPin === userPin);

let otherNames = "John Doe";
console.log(otherNames);

console.log(otherNames.length);//counts the characters of a string

//function greet(){
   // console.log("Good morning");
//}


//greet();//Invoke the function
//function sumTwoNumbers(a, b){
  //  console.log(a + b);
//}

//sumTwoNumbers(34, 45);
//function addTwoNumber(a, b) {
//    return a + b;
//}
//console.log(addTwoNumber(45, 23));
//function multiplyTwoNumbers(a, b){
  //  return a * b;
//}
//alert(multiplyTwoNumbers(23, 56));
//const fruits =[];//square bracket method
//const fruit =new Array();//The array constructor method
// const fruits = ['orange','mango','pawpaw','pinneapple'];
// const score = [90,45,34,6,7,7,67,76];
// console.log(fruits.length);
// console.log(fruits[0]);//First element
// console.log(fruits[3]);//the third element
// console.log(fruits[4]);//returns undefined
// console.log(score.length);//sizes of the array
// console.log(score[score.lenght-1]); //last element of the array
// console.log(score[7]);//left element of the array score
// console.log(score);
// console.log(score.shift());
// console.log(score.pop());
// console.log(score.unshift("a"));

 //console.log(score.push)();

let counter = 0;
while(counter < 7){
    console.log(counter);
    counter++;
}

 
 
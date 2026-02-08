/* 

Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).


Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.


Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.


Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.


Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.


Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.


Problem 7: Write a JavaScript program to demonstrate type operators on different data types.


Problem 8: Write a JavaScript program to use string operators to concatenate two strings.


Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.


Problem 10: Write a JavaScript program to use the in operator to check if a property exists in an object. 

*/

// question 1-3 ------------------>> already done in previous assignment(similar)

// question 4 
let a = Number(prompt("Enter a: ")); 
let b = Number(prompt("Enter b: ")); 

if (a > b && b > 0){
     console.log("AND operator used");
}
 if (a > b || b < 0){
    console.log("OR operator used");
}
if (!(a < b)){
      console.log("NOT operator used");
}

//question 5
let a1 = Number(prompt("Enter first number:"));
let b1 = Number(prompt("Enter second number:"));

console.log("Bitwise AND (&):", a1 & b1);
console.log("Bitwise OR (|):", a1 | b1);
console.log("Bitwise XOR (^):", a1 ^ b1);
console.log("Bitwise NOT of a (~a):", ~a1);

//question 6 
let x = Number(prompt("Enter first number:"));
let y = Number(prompt("Enter second number:"));

let result = (x > y) ? x : y;
console.log("Larger number is:", result);

//question 7 
let num = 10;
let str = "Hello";
let bool = true;

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);

//question 8
let firstName = prompt("Enter first name:");
let lastName = prompt("Enter last name:");

let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

//question 9 
let a2 = 5;
let b2 = "JavaScript";
let c = false;
let d;

console.log(typeof a); 
console.log(typeof b); 
console.log(typeof c); 
console.log(typeof d); 

//question 10
let student = {
    name: "Ashwani", 
    age: 20, 
    branch: "CSE"
}

console.log("name" in student);
console.log("marks" in student);
/*

Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.

Question-2:    WAP to input radius of a circle and log the area of circle.

Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.

Question-4:    WAP to calculate total marks in two subject and then calculate percentage.

Question-5:    WAP to input the length and breath of rectangle and calculate the area and perimeter of rectangle.

Question-6:    WAP to input n numbers and log the average of those number.

Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.

Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.

Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.

Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.

*/

// question-1
let distanceInKm = prompt("Enter the distance in Kilometer:");
let distanceInMeter = distanceInKm * 1000;
let distanceInCentimeter = distanceInKm * 100000;
console.log(`Distance in Meter: ${distanceInMeter} m`);
console.log(`Distance in Centimeter: ${distanceInCentimeter} cm`);

// question-2
let radius = prompt("Enter the radius of circle: "); 
let area = 3.14*radius*radius; 
console.log(`Area of Circle is: ${area} m^2`)

// question-3 
let num1 = Number(prompt("Enter first number: "));
let num2=  Number(prompt("Enter Second number: ")); 
let add = num1 + num2;
let sub = num1 - num2;
let pro = num1 * num2; 
let div = num1 / num2; 
let mod = num1 % num2; 

console.log(`add: ${add}`); 
console.log(`sub: ${sub}`);
console.log(`pro: ${pro}`);
console.log(`div: ${div}`);
console.log(`mod: ${mod}`);

//question-4
let marks_subject1 = Number(prompt("Enter the marks: "));
let marks_subject2 = Number(prompt("Enter the marks: "));
let total_marks = marks_subject1 + marks_subject2; 
let percentage = (total_marks/200)*100; 
console.log(`Percentage of marks scored: ${percentage}%`); 

//question - 5
let length = Number(prompt("Enter: "));
let breadth = Number(prompt("Enter: "));
let area_rectangle = length*breadth; 
let perimeter_rectangle = 2*(length + breadth); 
console.log(`Perimeter: ${perimeter_rectangle}m  Area: ${area_rectangle}m^2`); 

//question-6
let n = Number(prompt("Enter how many numbers to input: "));

let sum = 0; 

for(let i=1; i<=n; i++) {
    let num = Number(prompt(`Enter number ${i}: `));
    sum = sum + num; 
}

let average = sum / n; 

console.log(`Average is: ${average}`); 

//question - 7 -------------- same as question 1 

//question - 8
let temp_fahreneit = Number(prompt("Enter the temperature in Fahreneit: ")); 
let temp_centigrade = (temp_fahreneit - 32)*5/9; 
console.log(`Temperature in Centigrade is: ${temp_centigrade}`); 

//question-9 
let quantity = Number(prompt("Enter the quantity: ")); 
let rate_of_production = Number(prompt("Enter the rate of production in INR: ")); 
let amount = quantity*rate_of_production; 
console.log(`Amount before discount: ${amount}`); 

let discount = 10; 

let discount_amount = amount/10; 
let new_amount = amount - discount_amount; 

console.log(`Discount amount after 10% discount is: ${discount_amount} and amount after discount is: ${new_amount}`); 

//question-10
let principal_amount = Number(prompt("Enter principal amount: ")); 
let roi = Number(prompt("Enter Rate of Interest: ")); 
let years = Number(prompt("Enter number of years: ")); 
let simple_interest = principal_amount*roi*years/100; 

console.log(`The simple interest calculated is: ${simple_interest}`); 

/* Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).

Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).

Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).

Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).

Question-6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).

Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.

Question-8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.

Question-9:   WAP that classifies a number as positive, negative, even, or odd.

Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."

*/ 

//question - 1
let x = Number(prompt("Enter x: ")); 
if(x > 10){
    console.log("x is greater than 10"); 
} else {
    console.log("x is not greater than 10");
}

//question - 2
let user_age = Number(prompt("Enter user age: ")); 
if(user_age>18){
    console.log("Eligible to drive")
} else {
    console.log("Not eligible to drive"); 
}

//question-3 
let marks = Number(prompt("Enter marks: ")); 
if(marks>90 && marks<=100){
    console.log("Grade: A"); 
} else if(marks>80 && marks<=90){
    console.log("Grade: B"); 
} else if(marks>70 && marks<=80){
    console.log("Grade: C"); 
}else if(marks < 70){
    console.log("Failed");
}

//question-4 
let hour = Number(prompt("Enter hour (0–23):"));

if (hour >= 0 && hour < 12) {
  console.log("Good Morning");
} 
else if (hour >= 12 && hour < 17) {
  console.log("Good Afternoon");
} 
else if (hour >= 17 && hour < 21) {
  console.log("Good Evening");
} 
else if (hour >= 21 && hour < 24) {
  console.log("Good Night");
} 
else {
  console.log("Invalid time");
}

//question-5
let day = Number(prompt("Enter case bewteen 1-7: "));

switch(day){
    case 1:
        console.log("Sunday");
    break;

    case 2:
        console.log("Monday");
    break;

    case 3:
        console.log("Tuesday");
    break;

    case 4:
        console.log("Wednesday");
    break;

    case 5:
        console.log("Thursday");
    break;

    case 6:
        console.log("Friday");
    break;

    case 7:
        console.log("Saturday");
    break;

    default:
        console.log("Invalid day"); 

}

//question -7 
let month = Number(prompt("Enter case bewteen 1-12: "));

switch(month){
    case 1:
        console.log("January");
    break;

    case 2:
        console.log("Feburary");
    break;

    case 3:
        console.log("March");
    break;

    case 4:
        console.log("April");
    break;

    case 5:
        console.log("May");
    break;

    case 6:
        console.log("June");
    break;

    case 7:
        console.log("July");
    break;

    case 8:
        console.log("August");
    break;

    case 9:
        console.log("September");
    break;

    case 10:
        console.log("October");
    break;

    case 11:
        console.log("November");
    break;

    case 12:
        console.log("December");
    break;

    default:
        console.log("Invalid Month"); 
        
}

//question-8 
let temp = Number(prompt("Enter between 0-50 degree centigrade: ")); 

if(temp>35 && temp<=50){
    console.log("Hot"); 
} else if(temp>20 && temp<=35){
    console.log("Neutral");
} else if(temp>0 && temp<=15){
    console.log("Cold"); 
} else {
    console.log("Invalid temperature")
}

//question-9
let input_num = Number(prompt("Enter the number: ")); 

if(input_num>=0){
    console.log("Positive number");
} else {
    console.log("Negative num");
}

//question-10
let username = prompt("Enter username: "); 

if(username.length < 6){
    console.log("Username too Short");
} else if(username.length > 15){
    console.log("Username too Long");
} else {
    console.log("Username Accepted"); 
}
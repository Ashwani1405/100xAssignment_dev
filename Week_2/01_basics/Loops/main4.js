/*
Question-1: WAP that logs numbers from 1 to 10 to the console.

Question-2: WAP that log all even numbers from 2 to 20.

Question-3: WAP that counts backward from 10 to 1 and logs the values.

Question-4: WAP to calculate the sum of numbers from 1 to 5.

Question-5: WAP that prints powers of 2 (2^n) up to 64.

Question-6:  WAP to Develop a do-while loop for a simple number guessing game. Ask the user to guess a number between 1 and 10, and keep prompting until they guess correctly.

Question-7: WAP to display the multiplication table (1 to 10) in the console.

Question-8: WAP that use the break statement to exit the loop when the counter reaches 5. Also, use continue to skip printing the value 3 ( Note : Loop Starts from 0).

Question-9: WAP that logs numbers from 1 to 30. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz." For numbers which are multiples of both 3 and 5, log "FizzBuzz."

Question-10: WAP to identify and log prime numbers within a given range.
*/

//question -1 
for(let i=1; i<=10; i++){
    console.log(i); 
}

//question -2 
for(let i=2; i<=20; i+=2){
    console.log(i); 
}

//question -3
for(let i=10; i>=1; i--){
    console.log(i);
}

//question -4
let sum = 0; 

for(let i=1; i<=5; i++){
    sum = sum + i; 
}
console.log(sum); 

//question -5
for(let i=1; i<=6; i++){
    console.log(2**i); 
}

//question -6
let num = Number(prompt("Enter the number to guess: "));
let guess; 

do {
    guess = Number(prompt("Enter the guess between 1 and 10: ")); 
} while (guess !== num); 

console.log("You have guessed the correct number!"); 

//question -7
let n = Number(prompt("Enter the number to get its table"));

for(let i=1; i<=10; i++){
    console.log(n*i); 
}

//question -8
for(let i=0; ; i++){
    if(i === 3){
        continue; 
    }
    
    if(i === 5){
        break;
    }
    console.log(i); 
}

//question -9
for(let i=1; i<=30; i++){
    if(i%3 === 0){
        console.log("Fizz");
    } else if(i%5 === 0){
        console.log("Buzz"); 
    } else {
        console.log(i); 
    }
}

//question -10 
let start = Number(prompt("Enter starting number:"));
let end = Number(prompt("Enter ending number:"));

for (let num = start; num <= end; num++) {
  if (num < 2) continue;

  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}

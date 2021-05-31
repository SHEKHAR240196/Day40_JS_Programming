const read = require("prompt-sync");
const prompt = read();

function palindrome () {
    temp = number;
    reverse = 0

    while(number > 0){
        reminder = number % 10; 
        reverse = reminder + (reverse * 10);
        number = Math.floor(number / 10);
    }    
    if(reverse == temp){
        console.log("is a palindrome number");
    }else{
        console.log("not a palindrom number");
    }
}

let number = prompt("Enter a number: ");
number = Number(number);
palindrome (number);

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

function prime () {
    flag=0
    for(i = 2; i<number; i++){
        if(number % i == 0){
            flag = 1;
            break;
        }
    }
    if(flag == 0){
        console.log("Prime Number");   
    }
    else{
        console.log("Non Prime Number");
    }
}

let number = prompt("enter a number: ");
resultPrime = prime(number);
resultPalindrome = palindrome(number);
© 2021 GitHub, Inc.
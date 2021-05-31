const read = require("prompt-sync");
const prompt = read();

function degC () {
    console.log("degc to degF conversion: ");
    degF = 1 * (9 / 5) + 32;
    console.log(degF);

}

function degF () {
    console.log("degF to degC conversion: ");
    degC = (1 - 32) * (5 / 9);
    console.log(degC);
}

console.log('1. Celcius to Fehrenheit');
console.log('2. Fehrenheit to Celcius');

let choice = prompt("enter your choice: ");
let number = prompt("enter a number: ");
 
number = Number(number);
choice = Number(choice);


switch(choice){
    case 1:
        console.log("you choice degC to degF conversion");
        if(number > 0 && number <= 100){
            //console.log("right number");
            degC(number);
        }else{
            console.log("error!!");
        }
        break;
    case 2:
        console.log("you choice degF to degC conversion");
        if(number > 32 && number < 212){
            degF(number);
        }else{
                console.log("error")
        }
        break;
    default:
        console.log("error input");
}

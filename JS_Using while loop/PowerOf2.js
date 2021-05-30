const prompt = require('prompt-sync')();
let number = prompt('Enter the value of  = ');

let i = 0;
while(i < number){
    let power = 2**i;
    i++;
    console.log(power); 
    if(power == 256){
        break;
    }
}

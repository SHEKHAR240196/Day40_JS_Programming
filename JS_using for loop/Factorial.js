const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question("Enter a Number ? ", function(number) {
       let result = 1;
       for(let i = number; i>=1 ; i--) {
           result = result * i;
       }
        console.log(result);        
       rl.close();
    });

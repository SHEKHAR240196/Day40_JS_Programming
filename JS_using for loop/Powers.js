const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a Number ? ", function(number) {
     for (let i = number; i <= number; i++) {
         var powers = number;
        powers = powers * number;
       
     }
      console.log(powers);
  });
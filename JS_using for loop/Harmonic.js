const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a Number ? ", function(number) {
    let harmonic = "";
    for (let i = 1; i <= 5; i++) {
      console.log(harmonic + "1/" + i + " or " + 1 / i);
    }
});

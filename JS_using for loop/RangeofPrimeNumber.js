const readline4 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline4.question("Enter a minimum number", (number10) => {
    readline4.question("Enter a maximum number", (number11) => {
      for (let j = number10; j <= number11; j++) {
        let isPrime = true;
        for (let i = 2; i <= j / 2; i++) {
          if (j % i == 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime == true) {
          console.log(j);
        }
      }
  
      readline4.close();
    });
  });
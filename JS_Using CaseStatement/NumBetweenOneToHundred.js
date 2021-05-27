  
const readline = require("readline").createInterface({
    input: process.stdin,
    output:process.stdout
  });
  
  readline.question("Enter a number", (inputNumber) => {
    //number = inputNumber;
    switch (inputNumber) {
        case 1 :
                console.log("One");
                break;
        case 100:
               console.log("HUNDRED");
               break;
        case 1000 : 
                  console.log("THOUSANDS");
                  break;      
    }
      
  });

let n = 1;
let max = Math.floor(100+ ((Math.random() * 10) % 900));
let min = max;
console.log(max);

while(n <  4) {
    randomNumber = Math.floor(100 + ((Math.random() * 10) % 900));
    console.log(randomNumber);
    if (max < randomNumber) {
        max = randomNumber;
    }
    if (min > randomNumber) {
        min = randomNumber;
    }
     n++;
}
console.log("Maximum is"+max+" "+"Minimum is"+min);

let a = 5,
  b = 7,
  c = 2;

let operation1 = a + b * c;
let operation2 = c + a / b;
let operation3 = (a % b) + c;
let operation4 = a * b + c;
console.log(operation1);
console.log(operation2);
console.log(operation3);
console.log(operation4);
let maximum = Math.max(operation1, operation2, operation3, operation4);
console.log(maximum);
let minimum = Math.min(operation1, operation2, operation3, operation4);
console.log(minimum);
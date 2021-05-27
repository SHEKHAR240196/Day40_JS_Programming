let number2 = Math.floor(1 + ((Math.random() * 10) % 7));
console.log("number entered: " + number2);

switch (number2) {
  case 1:
    console.log("SUNDAY");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WEDNESDAY");
    break;
  case 4:
    console.log("THURSDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  case 6:
    console.log("SATURDAY");
    break;
  case 7:
    console.log("MONDAY");
    break;
  default:
    console.log("Invalid!");
 }

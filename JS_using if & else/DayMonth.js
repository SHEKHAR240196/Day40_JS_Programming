let date = new Date();
let day = date.getDate();
let month = date.getMonth();

console.log(month);
console.log(day);

if (month >= 3 && month <= 6) {
    if(month == 3) {
        if(day >= 20) {
            console.log("true");
        } else {
            console.log("false");
        }
     }
}
if (month == 6) {
    if (day <= 20) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  
  if (month > 3 && month < 6) {
    console.log(true);
  }
else {
  console.log(false);
}

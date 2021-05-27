let year = new Date().getFullYear();
if (year % 4 == 0) {
  if (year % 100 != 0) {
    console.log(year + " is leap year!");
  } else {
    if (year % 400 == 0) {
      console.log(year + " is leap year!");
    }
  }
} else {
  console.log(year + " is not a leap year!");
}
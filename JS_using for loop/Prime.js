  
function prime(number) {
    let isPrime = true;

    for (let i = 2; i < number; i++) {
         if(number % i == 0) {
             isPrime = false;
         }
     }
    if(isPrime) {
        console.log("Yes its a prime Number");
  }
  else {
      console.log("Noo");

  }
}
prime(11);
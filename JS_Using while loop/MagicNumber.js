const readline= require("prompt-sync");
const prompt = read();

lowerLimit = 1;
upperLimit = 100;
flag = 0;
mid = 0;

let InputNum = prompt("Enter a number: ");
InputNum = Number(InputNum);

while(flag == 0){
    mid = Math.floor(lowerLimit + upperLimit) / 2;

    if(InputNum == mid){
        console.log(InputNum + " is the magic number.");
        flag = 1;
    }
    else if (InputNum > mid) {
        lowerLimit = mid + 1;
    }
    else {
        upperLimit = mid - 1;
    }
}
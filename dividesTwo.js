function DividesTwo(num1,num2) {
var divided = num1/num2 + "";
var solution;
console.log(divided);
  if ( divided.length > 3 ) {
    solution = divided.substring(0, divided.length-3) + "," + divided.substring(divided.length-3);
  }

console.log(solution);
}

DividesTwo(100000, 10);
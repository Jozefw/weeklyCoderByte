function CheckNums(num1,num2) { 
  if ( num1 === num2 ) {
    console.log("equal");
  }
  else if ( num2 > num1 ) {
    console.log("num2 greater");
  }
  else {
    console.log("num1 is greater");
  }
         
}

CheckNums(3,2);
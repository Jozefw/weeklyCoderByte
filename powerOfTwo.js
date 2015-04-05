function PowersofTwo(num) { 
var isInteger = Math.sqrt(num);
  if ( isInteger === parseInt(isInteger) ) {
    console.log("true " + isInteger);
  }
  else {console.log("false " + isInteger);}
         
}

PowersofTwo(62);
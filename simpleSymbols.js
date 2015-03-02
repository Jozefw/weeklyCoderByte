function SimpleSymbols(str) { 
   var strSplit= str.split("");
   var solution = true;
  console.log(strSplit);
      if ( strSplit[0] === /[a-z]/gi || (strSplit[strSplit.length] === [a-z]/gi)) {
    solution = false;
        console.log(solution);
      }
  for ( var i= 1; i<strSplit.length-1; i++ ) {
    if ( strSplit[i] === [a-z]/gi && strSplit[0] != "+" && strSplit[i+1] != "+" ) {
      solution = false;
    }
  }
  console.log(answer);
}

SimpleSymbols("+t+r+");
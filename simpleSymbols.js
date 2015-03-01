function SimpleSymbols(str) { 
  for ( var j = 0; j<str.length; j++ ) {
    if ( str[0] != "+" && str[str.length] != "+" ) {
      console.log("not surrounded");
    }
    else {
      for ( var i = 1; i<str.length-1; i++ ) {
        if ( str[i-1] === "+" && str[i+1] === "+" ) {
          console.log("ok");
//           need a counter
        }
      }
    }
  }       
}

SimpleSymbols("+t+rr+");
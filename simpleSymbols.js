function SimpleSymbols(str) { 

  for ( var i = 0; i<str.length; i++ ) {
     console.log(str.charCodeAt(i));
    if ( str.charCodeAt(i)=== 43 && str.charCodeAt(i+2)===43 ) {
      console.log("true");
    }
  }
   
   
         
}

SimpleSymbols("+t+");
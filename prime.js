function PrimeTime(num) { 
  if ( num <= 2 ) {
    console.log("this is prime");
  }
  for ( var i = 0; i<num; i++ ) {
    if ( num%i === 0 ) {
      console.log("this ain prime");
    }
    console.log("this could be prime");
  }
    
}

PrimeTime(5);
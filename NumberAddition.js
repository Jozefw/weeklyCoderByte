function NumberAddition(str) { 
var sumSolution= 0;
var counter=0;
var temp=0;
var splitString = str.split("");
  console.log(splitString);
  for ( var j = 0; j<splitString.length; j++) {
    var digitPattern=/\d/g;
    if ( splitString[j].match(digitPattern ) ) {
      
      temp = temp*10 + splitString[j]*1;
      counter = counter + 1;
      console.log(counter +" " + temp);
    }
    else {
      if (counter > 0 ) {
        sumSolution = sumSolution + temp;
        console.log(sumSolution + " this is solution");
      }
      counter = 0;
      temp=0;
      console.log(counter + " else");
    }
  }
  sumSolution = sumSolution + temp;
  console.log(sumSolution + " this is solution");    
}

NumberAddition("88hi3o1");
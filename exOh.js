function ExOh(str) { 
var splitted = str.split("");
var sorted = splitted.sort();
var numArray =[];
var ohCounter = 0;
var exCounter;

for ( var i = 0; i < sorted.length; i++ ) {
  console.log(sorted[i]);
  numArray.push(sorted[i].charCodeAt(0));
  if ( numArray[i] === 111 ) { 
    ohCounter = ohCounter + 1;
  }
  
 console.log(numArray);
}
  
  exCounter = sorted.length - ohCounter;
 console.log(exCounter,ohCounter);
         
}

ExOh("xoxoxxxo");
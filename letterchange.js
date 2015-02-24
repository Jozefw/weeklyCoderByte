function LetterChanges(str) { 
  var lwrCase = [],
  temp = [],
  nextLetter,
  capVowel;
// chang to lower case
  lwrCase = str.toLowerCase();
  console.log(typeof lwrCase);
//   change to ascii
  for ( var i = 0; i <lwrCase.length; i++ ) {
    if ( lwrCase[i] === 32 ) {
      lwrCase[i] = 32;
    }
    else { temp.push(lwrCase.charCodeAt(i) + 1);}
    
  }
  
  console.log(temp);
         
}

LetterChanges("helL");
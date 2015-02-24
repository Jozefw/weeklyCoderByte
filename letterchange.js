function LetterChanges(str) { 
  var lwrCase = [],
  temp = [],
  nextLetter=[],
  unCap,
  changedVowel,
  capVowel=[];
  
// chang to lower case
  lwrCase = str.toLowerCase();
  console.log(lwrCase);
//   change to ascii
  for ( var i = 0; i <lwrCase.length; i++ ) {
   temp.push(lwrCase.charCodeAt(i) + 1);
    if ( temp[i] === 33 ) {
      temp[i] = 32;
    }
    nextLetter.push(String.fromCharCode(temp[i]));
    unCap = nextLetter.join("");
    
  }
  for ( var j = 0; j<unCap.length; j++ ) {
      capVowel.push(unCap[j]);
        if ( capVowel[j] === "a" || capVowel[j]  === "e" || capVowel[j]  === "i" || capVowel[j]  === "o" ||capVowel[j]  === "u" ) {
          capVowel[j] = capVowel[j].toUpperCase();
    }
  }
  capVowel = capVowel.join("");
  console.log(capVowel + " answer");      
}

LetterChanges("helL o");
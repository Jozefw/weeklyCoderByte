function LongestWord(sen) { 
  
var temp = [],
  wSplit = [],
   twins = [],
   bigWord;
  
wSplit = sen.split(" ");
wSplit.sort(function(a,b){return a.length-b.length;});
console.log(wSplit);
  
//   check for game length eq two
  if ( wSplit.length === 2 ) {
    console.log("end of game" + " " + wSplit[0]);
    return wSplit[0];
  }
  
  else {
    for ( var i = 0; i< wSplit.length-1; i++ ) {
       if ( wSplit[i].length === wSplit[i+1].length ) {
         twins = wSplit[i];
         console.log(twins + " win");
       }
    }
  }       
}

LongestWord("it is a");
function LongestWord(sen) { 
  
var bigWord = [],
     wSplit = [];
  
wSplit = sen.split(" ");
wSplit.sort(function(a,b){return a.length-b.length;});
console.log(wSplit);
  
//   check for game length
  
 if ( wSplit.length === 1 ) {
   console.log(wSplit[0]);
   return wSplit;
 } 
  else if ( wSplit.length === 2 && wSplit[0].length === wSplit[1].length ) {
      console.log("end of game" + " " + wSplit[0]);
      return wSplit[0];
  }
  else {
    bigWord = wSplit.pop();
    console.log(bigWord);
  }  
}

LongestWord("it a a bomb");
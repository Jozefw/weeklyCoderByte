function LongestWord(sen) { 
var temp = [];
var wSplit;
wSplit = sen.split(" ");
//   sorts largest word
wSplit.sort(function(a,b){return b.length-a.length;});
  console.log(wSplit);
  
         
}

LongestWord("that is the world");
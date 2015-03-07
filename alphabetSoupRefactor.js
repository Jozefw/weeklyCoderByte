function AlphabetSoup(str) { 

    var temp = [];
    var solution = [];
    str = str.toLowerCase();
    console.log(str);
  
    function toAscii(str) {
      for ( var j = 0; j < str.length; j++ ) {
        temp.push(str.charCodeAt(j));
        temp = temp.sort(function(a,b){return a-b;});
      }

      toLetter(temp);
    }

  
    function toLetter(ascii) {
     for ( var i = 0; i < ascii.length; i++ ) {
      solution.push( String.fromCharCode(ascii[i] )); 
     }
       console.log(solution + " solution");
       alert(solution);
    
    }
  
  
  toAscii(str);
  return solution;
}

alert(AlphabetSoup("geTTing"));
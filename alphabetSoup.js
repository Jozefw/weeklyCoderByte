function AlphabetSoup(str) { 

    var temp = [];
    var solution = [];
    str = str.toLowerCase();

    function toAscii() {
      for ( var j = 0; j <str.length; j++ ) {
        temp.push(str.charCodeAt(j));
        temp = temp.sort(function(a,b){return a-b;});
      }
    }

   for ( var i = 0; i<temp.length; i++ ) {
    solution.push(String.fromCharCode(temp[i]));  
   }
         
}

AlphabetSoup("geTTing");
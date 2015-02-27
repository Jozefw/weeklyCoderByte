function LetterCapitalize(str) { 
  var solution =[],
      strSplit,
      firstLetter,
      temp=[],
      cap;
  strSplit=str.split(" ");
  console.log(strSplit);
  for ( var i = 0; i < strSplit.length; i++ ) {
    temp = strSplit[i][i].toUpperCase();
    console.log(temp);
    
    
  }
  
  
  
  
         
}

LetterCapitalize("get it done"); 
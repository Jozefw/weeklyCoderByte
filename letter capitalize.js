function caps(str) {
  var strSplit;
      
  strSplit = str.split(" ");
  console.log(strSplit);
  for ( var i = 0; i< strSplit.length; i++) {
    strSplit[i] = strSplit[i].charAt(0).toUpperCase().concat( strSplit[i].slice(1) );
  }

      strSplit.join();
  console.log(strSplit);
}

caps("git it done");
function changeCaps(str) {
  var splitted;
  splitted = str.split("");
  console.log(splitted);
  for ( var i=0; i<splitted.length; i++ ) {
    if ( splitted[i] === splitted[i].toUpperCase() ) {
      splitted[i] = splitted[i].toLowerCase();
    }
    else if ( splitted[i] === splitted[i].toLowerCase() ) {
      splitted[i] =splitted[i].toUpperCase();
    }
  }
  console.log(splitted);  
}
changeCaps("Hello Worls");
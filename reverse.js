function firstReverse(str) {
var arrSolution = [];
var solution;
var strSplit =str.split("");
  for ( var i = strSplit.length; i > 0;  i-- ) {
    arrSolution.push(strSplit.pop());
    solution = arrSolution.join(""); 
  }
  return solution;
}

firstReverse("piggy");
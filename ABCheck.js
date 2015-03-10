function ABCheck(str) { 
var pattern = (/[a].{3}[b]/);
  var solution = pattern.test(str);
  console.log(pattern.test(str));
  return solution;   
}

ABCheck("after badly");

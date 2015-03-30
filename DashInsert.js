function DashInsert(str) { 
  console.log(str);
  var solution;
  var arr = [];
  solution = str.toString().split('');
  console.log(solution + " solution");
  for ( var i = 0; i < solution.length; i++ ){
    arr.push(solution[i]);
    console.log(arr);
    if ( (solution[i]%2 !== 0) && ( (solution[i+1]%2) !==0) && ( solution.indexOf(solution[i+1]) !== -1)) {
      arr.push("-");
      console.log(arr);
      
    }
  }
  console.log(arr.join(""));
         
}
DashInsert(235811); 
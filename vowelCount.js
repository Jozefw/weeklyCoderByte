function vowelCount(str){
  pattern = str.match(/[aeiou]/g);
  var solution = pattern ? pattern.length:0;
  
  console.log(solution);
  
}

vowelCount("all cows eat grass");
var nums = [8,7];
function SecondGreatLow(arr) { 
  nums.sort(function(a,b){return a-b;});
  if ( nums.length < 2 ) {
    alert("Array is too short");
  }
  else if ( nums.length === 2 ) {
     console.log( "The array has only 2 values and is " + nums );
  }
  else {console.log(nums[1] + " , " + nums[nums.length - 2]);}
}
SecondGreatLow(nums);
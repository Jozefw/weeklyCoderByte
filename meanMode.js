var nums=[1,3,5,5,7,9];
var mean;
var sum = 0;
var mode = '';
var repeat=0;
var count=0;
function MeanMode(arr) { 
  for ( var i=0; i< nums.length; i++ ) {
    sum = sum + nums[i];
  
    console.log(sum);
  }
  mean = sum/nums.length;
  console.log(mean);
  
  for ( var j=0; j < nums.length-1; j++) {
    if ( nums[j] === nums[j+1] ) {
      count = count +1;
      mode = mode + nums[j+1];
      console.log(mode + " this is mode");
    }
  }
         
}

MeanMode(nums);
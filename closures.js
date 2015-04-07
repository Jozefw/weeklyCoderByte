function add2() {
  var counter = 0;
  function plus() {counter += 1;  return counter;}

  return plus;
}


var add = (function () {
   var counter = 0;
   return function () {return counter += 1;};
})();


var ctr = 0;
var plus2 = function() { ctr += 1;  return ctr; };

var add3 = function() {
  return plus2;
};


function makeAdder(x) {
  var fx = function(num) {
    return num + x;
  };
  
  return fx;
}


var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1
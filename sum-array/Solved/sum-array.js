// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
  var result = 0;

  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];
    result += currentNumber;
  }

  return result;
};

// console.log('result is ' + (sumArray)[1,2,3,4],)
/*
  Calculate and return the missing number in solving for mean using the array as the rest of the numbers and target as (given) average
*/

function prChecker(arr, avg) {
  let sum = arr.reduce((a, b) => a + b);
  minQuality = (avg * (arr.length + 1)) - sum;

  return minQuality;
}

console.log(prChecker([1,1,1], 2)); // returns 5
console.log(prChecker([1,1,1,1], 2)); // returns 6
console.log(prChecker([50,60,70,80,90], 70)); // returns 70
console.log(prChecker([50,50,50,50,50], 70)); // returns 170
console.log(prChecker([25,30,15,80], 100)); // returns 350
console.log(prChecker([86,77,48,52,90,73,44,99], 85)); // returns 196
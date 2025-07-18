/*
  Calculate and return the missing number in solving for mean using the array as the rest of the numbers and target as (given) average
*/

function prChecker(arr, avg) {
  let sum = arr.reduce((a, b) => a + b);
  minQuality = (avg * (arr.length + 1)) - sum;

  return minQuality;
}
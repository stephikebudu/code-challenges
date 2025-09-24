/*
Pseudocode
1. Loop list, assign first element as assumed first num in sum
2. Cheeck if the num with the sum of any othr number in the array equals the target num
    If yes, return index of both in array
3. Sort array of indices
*/

function findTarget(arr, target) {
  let firstNumIndex, secondNumIndex;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] + arr[i + 1] == target) {
      firstNumIndex = i
      secondNumIndex = i + 1
    }
  }
  let indices;
  if (typeof (firstNumIndex) !== "number") {
    indices = "Target not found";
  } else {
    indices = [firstNumIndex, secondNumIndex]; // sort indices arr
  }
  return indices;
}

console.log(findTarget([2, 7, 11, 15], 9)); // returns [0, 1]
console.log(findTarget([3, 2, 4, 5], 6)); // returns [1, 2]
console.log(findTarget([1, 3, 5, 6, 7, 8], 15)); // returns [4, 5]
console.log(findTarget([1, 3, 5, 7], 14)); // returns "Target not found"
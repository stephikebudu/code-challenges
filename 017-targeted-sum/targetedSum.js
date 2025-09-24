/*
Pseudocode
1. Loop list, assign first element as assumed first num in sum
2. Cheeck if the num with the sum of any othr numbr in the list equals the target num
    If yes, return index of both in array
3. Sort array of indices
*/

function findTarget(arr, target) {
  let firstNumIndex, secondNumIndex;

  for (let i = 0; i < arr.length; i++){
    let firstNum = arr[i];
    if (arr[i] + arr[i + 1] == target) {
      firstNumIndex = i
      secondNumIndex = i + 1
    }
  }
  let indices;
  if (typeof (firstNumIndex) !== "number") {
    indices = "Target not found";
  } else {
    indices = [firstNumIndex, secondNumIndex];
  }
  return indices;
}
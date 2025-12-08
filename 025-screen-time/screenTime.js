/*
Pseudocode
1. Init answer var as "false"
2. Loop through array
3. Define conditions according to constraints
    IF condition, update answer to true
    IF NOT condition, continue
4. Return answer
*/

function tooMuchScreenTime(arr) {
  const arrSum = arr.reduce((a, b) => a + b);
  let answer = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10 || i < 5 && ((arr[i] + arr[i + 1] + arr[i + 2]) / 3) >= 8 || (arrSum / 7) >= 6) {
      answer = true;
    }
  }

  return answer;
}

console.log(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]));
console.log(tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]));
console.log(tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]));
console.log(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]));
console.log(tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]));
console.log(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]));
console.log(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]));
/*
Pseudocode
1. validate input
2. initialize arr to store all numbers whose square contain 3
3. loop through numbers from 1 up to input number
4. square each num and check if it contains 3
  5. if it does, add it to the array
6. return total number of items in array
*/

function squaresWithThree(num) {
  if (num < 1 || num > 10000) {
    return "Please enter a number between 1 - 10000 (both inclusive)"
  }

  let totalSquaresWithThree = [];
  for (let i = 1; i <= num; i++) {
    if (String(i * i).includes("3")) {
      totalSquaresWithThree.push(i);
    }
  }

  return totalSquaresWithThree.length;
}

console.log(squaresWithThree(1)); // returns 0
console.log(squaresWithThree(10)); // returns 1
console.log(squaresWithThree(100)); // returns 19
console.log(squaresWithThree(1000)); // returns 326
console.log(squaresWithThree(10000)); // returns 4531
/*
Pseudocode
1. Use regex to count no of digits and no of letters, store values in var
2. Filter letters/numbers into an arr
3. Compare length of both arrays, if digits/letters are more or both are equal and return appropriate ans
*/

function digitsOrLetters(str) {
  const digReg = /[0-9]/;
  const letReg = /[a-z]/i;
  const arr = str.split("");
  const letters = arr.filter(i => letReg.test(i));
  const nums = arr.filter(i => digReg.test(i));
  let answer = letters.length > nums.length ? "letters" : nums.length > letters.length ? "digits" : "tie"
  console.log(answer);
}
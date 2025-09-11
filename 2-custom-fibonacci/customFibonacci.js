/*
- The function should have an array parameter and a number parameter
- It should sum the two consecutive numbers up to the given number parameter
- It should add the sum to the back of the array and return array at the end
*/

function customFib(arr, length) {
  if (arr.length !== 2 || Array.isArray(arr) !== true || typeof length !== "number") {
    return "Please ensure you call the function with a 2-element number array and a number eg. customFib([0, 1], 10)";
  }
  let fib = arr.slice();
  let nextEl;

  for (i = 0; i < length - arr.length; i++) {
    nextEl = fib[i] + fib[i+1];
    fib.push(nextEl);
  }

  return fib;
}

console.log(customFib([25, 26], 50));
console.log(customFib([0, 1], 10));
console.log(customFib("Hello world", 40));
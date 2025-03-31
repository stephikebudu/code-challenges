function tribonacci(arr, n) {
  // check if input is correct
  if (arr.length !== 3 || Array.isArray(arr) !== true || typeof n !== "number") {
    return "Please enter correct input format: a 3-element array and a number eg tribonacci([0, 1, 1], 10)"
  }

  // initialize array and next element array
  let trib = arr.slice();
  let nextEl;

  // use loop to generate and access the three elements to add and push the sum as the next element, ensure the length of final array accounts for initial number of elements in array
  for (i = 0; i < n - arr.length; i++) {
    nextEl = trib[i] + trib[i+1] + trib[i+2];
    trib.push(nextEl);
  }

  return trib;
}

console.log(tribonacci([0, 1, 1], 10));
console.log(tribonacci([1, 2, 3], 15));
console.log(tribonacci([123, 456, 789], 20));

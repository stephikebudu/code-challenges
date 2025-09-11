/* PSEUDOCODE
  Use template literal and recall:
  1. per square inch means you need to find the area first and since a pizza is circular use Area = pi * ((d/2)squared)
  2. then find price per square inch using price/result
  3. round to 2 decimal places using toFixed()
*/

function pizzaPrice(size, price) {
  return `Your pizza costs ${(price / (Math.PI * (size / 2) ** 2)).toFixed(2)} USD per square inch`
}

console.log(pizzaPrice(7, 4.30))
console.log(pizzaPrice(9, 5.95))
console.log(pizzaPrice(12, 7.90))
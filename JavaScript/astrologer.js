/*
Pseudocode
1. Validate input to ensure year is >= 1924
2. Get the difference in birth year and 1924
3. Determine animal index. Get animal index by calculating yearDifference % animals.length
4. Determine element index. Because the element changes every 2 years divide yearDifference by 2 first and round down to ensure you hav a whole num, then calculate new yearDifference % elements.length
5. then return the element and string as a string
*/

const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];
const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];

function findZodiac(n) {
  if (n < 1924) {
    return `${n} is less than 1924. Please enter year above 1923`;
  }

  let yearDiff = n - 1924;
  
  let animalIndex = yearDiff % animals.length;
  let animal = animals[animalIndex];

  let elementIndex = Math.floor(yearDiff/2) % elements.length;
  let element = elements[elementIndex];

  return `${element} ${animal}`;
}

console.log(findZodiac(1924));
console.log(findZodiac(1965));
console.log(findZodiac(1938));
console.log(findZodiac(1998));
console.log(findZodiac(2016));
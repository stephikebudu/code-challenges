/*
PSEUDOCODE
1. write a utility function to check no of times an element occurs
2. Loop through input array
    Check if element in that iteration occurs exactly 3 times
      If yes, use switch statement to determine new value for points variable
    If not, check if element in that iteeration occurs more than 3 times
      If yes, use switch again to give points for the element, and delete all occurencees of the element in the array
      Check if array length is less than 2 and populate array to max 2 element if length is less than 2
    If not, just just determine the value to be added to total points for each iteration based on values using switch statment
*/

function dieGame(arr) {
  let points = 0;
  let totalPoints = 0;
  let newArr;

  function occurence(value) {
    return arr.filter(arrVal => arrVal === value).length;
  }

  for (let i = 0; i < arr.length; i++) {
    const isThree = occurence(arr[i]) === 3;
    const isMore = occurence(arr[i]) > 3;

    if (isThree) {
      switch (arr[i]) {
        case 1:
          points += 1000;
          break;
        case 2:
          points += 200;
          break;
        case 3:
          points += 300;
          break;
        case 4:
          points += 400;
          break;
        case 5:
          points += 500;
          break;
        case 6:
          points += 600;
          break;
        default:
          points += 0;
      }

      // Remove all occurences from array
      newArr = arr.filter(arrVal => arrVal !== arr[i])

      // console.log(points, "inside if isThree conditional")
      // Check sub array if remaining elements are either 1 or 5 and add points accordingly
      if (newArr[0] === 1 && newArr[1] === 1) {
        points += 200;
      } else if (newArr[0] === 5 && newArr[1] === 5) {
        points += 100;
      } else if (newArr[0] === 1 || newArr[1] === 1) {
        points += 100;
      } else if (newArr[0] === 5 || newArr[1] === 5) {
        points += 50;
      }

      arr = newArr; // Update the original array to the new array without the 3 occurences

      totalPoints += points;
    } else if (isMore) {
      switch (arr[i]) {
        case 1:
          points = 1000;
          break;
        case 2:
          points = 200;
          break;
        case 3:
          points = 300;
          break;
        case 4:
          points = 400;
          break;
        case 5:
          points = 500;
          break;
        case 6:
          points = 600;
          break;
      }

      // Remove all occurences from array
      let newArr = arr.filter(arrVal => arrVal !== arr[i])

      // Add back the occurence if remaining elements are not 2
      while (newArr.length < 2) {
        newArr.push(arr[i])
      }

      // Check sub array if remaining elements are either 1 or 5 and add points accordingly
      if (newArr[0] === 1 && newArr[1] === 1) {
        points += 200;
      } else if (newArr[0] === 5 && newArr[1] === 5) {
        points += 100;
      } else if (newArr[0] === 1 || newArr[1] === 1) {
        points += 100;
      } else if (newArr[0] === 5 || newArr[1] === 5) {
        points += 50;
      }

      totalPoints += points;
    } else {
      switch (arr[i]) {
        case 1:
          points = 100;
          break;
          case 5:
            points = 50;
            break;
          default:
            points = 0;
      }

      totalPoints += points;
    }
    // console.log(points, "inside for loop")
  }
  // console.log(points, "outside loop")
  // totalPoints += points;

  console.log(totalPoints);
}

console.log(dieGame([2, 3, 4, 6, 2])); // returns 0
console.log(dieGame([1, 2, 3, 4, 6])); // returns 100
console.log(dieGame([5, 2, 3, 4, 6])); // returns 50
console.log(dieGame([1, 2, 3, 4, 5])); // returns 150
console.log(dieGame([1, 1, 2, 3, 6])); // returns 200
console.log(dieGame([2, 2, 3, 4, 6])); // returns 0
console.log(dieGame([3, 3, 2, 4, 6])); // returns 0
console.log(dieGame([4, 4, 2, 3, 6]));  // returns 0
console.log(dieGame([5, 5, 2, 3, 6])); // returns 100
console.log(dieGame([1, 1, 1, 1, 4])); // returns 1100
console.log(dieGame([1, 1, 1, 3, 3])); // returns 1000
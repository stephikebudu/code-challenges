/*
Pseudocode
1. reduce time to seconds and change to num data type
2. divide time by mile given
3. transform answeer to minutes:seconds format and return as answer
*/

function milePace(miles, time) {
  let avgTime, newMin, newSec;

  if (miles === 1) {
    avgTime = time
  } else {
    const timeArr = time.split(":")
    let timeToSec = (Number(timeArr[0]) * 60) + Number(timeArr[1]);
    newMin = String(Math.floor((timeToSec / miles) / 60));
    newSec = String(Math.round((timeToSec / miles) % 60));
    if (newMin.length < 2) {
      newMin = "0" + newMin;
    }

    if (newSec < 2) {
      newSec = newSec + "0";
    }

    avgTime = newMin + ":" + newSec;
  }

  return avgTime;
}

console.log(milePace(3, "24:00")); // should return "08:00"
console.log(milePace(1, "06:45")); // should return "06:45"
console.log(milePace(2, "07:00")); // should return "03:30"
console.log(milePace(26.2, "120:35")); // should return "04:36"
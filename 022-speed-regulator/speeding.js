/*
1. Identify vehicles over speed limit and put in array
2. Get total number and return as first element in answer array
3. Calculate difference between speed limit and cars that are over speed limit and return as 2nd element in answer array
4. REM to account for cases where no car or 1 car is over speed limit
*/

function speeding(speeds, limit) {
  let overLimits = speeds.filter(speed => speed > limit);
  let avg;
  if (overLimits.length > 1) {
    avg = (overLimits.reduce((a, b) => a + b, 0)) / overLimits.length;
  } else if (overLimits.length == 1) {
    avg = overLimits[0];
  }
  let info = overLimits.length == 0 ? [0, 0] : [overLimits.length, avg - limit];
  console.log(info);
}
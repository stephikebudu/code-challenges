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
    avg = (overLimits.reduce((a, b) => a + b, 0))/overLimits.length;
  } else if (overLimits.length == 1) {
    avg = overLimits[0];
  }
  let info = overLimits.length == 0 ? [0, 0] : [overLimits.length, avg - limit];
  console.log(info);
}

speeding([50, 60, 55], 60)
speeding([58, 50, 60, 55], 55)
speeding([61, 81, 74, 88, 65, 71, 68], 70)
speeding([100, 105, 95, 102], 100)
speeding([40, 45, 44, 50, 112, 39], 55)
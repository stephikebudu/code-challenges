/*
  PROBLEM:
  Create a function which accepts an `alarm` parameter. This will be the time our
  alarm to wake up has been set. The function should then calculate the difference 
  between the current time and the alarm time. Return that difference as a string 
  in the format `${hours} hours and ${minutes} minutes of sleep`. For example, 
  "3 hours and 45 minutes of sleep". Constraints: There are about 1000 different 
  ways to write time. You could use a Date object, or an "HH:MM" string, is it 12 hour 
  time or 24 hour time? You choose! You may choose whichever input format you would like 
  to require for the `alarm` parameter. HOWEVER you MUST validate that input format - that is, 
  if your function expects a 12 hour time, and I do not indicate AM/PM in my argument, the function 
  should exit with feedback about the exact format you are expecting
*/

/*
PSEUDOCODE:
- Accept time to wake up in 24hour string format
- Check if input format is string, check if HH is between 0-23, check if MM is between 0-59, check if 
format is 24hours (ie no AM or PM attached). Use regex
- Convert input to number type, convert to minutes
- Get the current hour and minute, convert to number, convert to minutes
- Get the difference, get the hour(s) and minute(s) in the difference and return with the string
*/

function timeDifference(alarmTime) {
  const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  if (timeRegex.test(alarmTime) === false || typeof alarmTime !== "string") {
    return "Please enter a 24hour time format and ensure it is a string eg '2:00', '09:30' or '18:25'";
  } 

  let inputHour;
  let inputMin;

  alarmTime.length === 4 
    ? inputHour = Number(alarmTime.slice(0, 1))
    : inputHour = Number(alarmTime.slice(0, 2));
  alarmTime.length === 4
    ? inputMin = Number(alarmTime.slice(2))
    : inputMin = Number(alarmTime.slice(3))
  const inputTimeInMins = (inputHour * 60) + inputMin;

  let currentHour = new Date().getHours();
  let currentMin = new Date().getMinutes();
  const currentTimeInMins = (currentHour * 60) + currentMin

  if (inputTimeInMins < currentTimeInMins) {
    return "Please enter a time ahead of current time"
  } else if (inputTimeInMins === currentTimeInMins) {
    return "No sleep time!"
  } else {
    const difference = inputTimeInMins - currentTimeInMins
    return `${Math.floor(difference / 60)} hours and ${difference % 60} minutes of sleep`;
  }
}

console.log(timeDifference("10:55"));
console.log(timeDifference("14:20"));
console.log(timeDifference("08:57"));
console.log(timeDifference("10:30"));
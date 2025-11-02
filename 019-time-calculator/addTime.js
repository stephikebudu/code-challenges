/*
Pseudocode
1. Declare constants - days of the week and day to minutes variables.
2. Transform given start time from 12 hour format to 24 hour format to diffeerentiate between before and after noon
3. Transform given start time and duration to minutes format.
4. Calc total time = start time in minutes + duration time to minutes
5. Calc days later = total time (already in minutes) / total number of minutes in a a day
6. Calc new time in new day = total time modulo total number of minutes in a day
7. From new time, extract hour and minute section by calculating new time in new day divided by 60minutes and new time in new day modulo 60minutes respectively
8. Determine before/after noon, check if new time is in AM or PM using new time hour
9. Calc new day by adding days later to given day index in days of the week array. RM to check if total is less than max index and divide by 7 days a week when necessary
10. Use new time hour, new time minute, days later and before/after noon variables
*/

// TODO: Implement defensive algorithm design, add docblock, add code doc and ensure midnight is returned as "12" not "0"

function addTime(start, duration, day = "Not given") {
  const startIsValid = /^((0?[1-9]|1[0-2]):([0-5][0-9]) ?([AaPp][Mm]))$/.test(String(start));
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIsValid = day != "Not given" && days.include(day);
  const dayToMins = 24 * 60;
  const [startTime, startDayMode] = start.split(" ");
  const [startHour, startMin] = startTime.split(":");
  const [durationHour, durationMin] = duration.split(":");
  let startHourTo24Hour;

  if (startDayMode.toUpperCase() === "PM" && Number(startHour) !== 12) {
    startHourTo24Hour = Number(startHour) + 12;
  } else if (startDayMode.toUpperCase() === "AM" && Number(startHour) === 12) {
    startHourTo24Hour = 0;
  } else {
    startHourTo24Hour = Number(startHour);
  }

  const startHourTo24HourToMins = (Number(startHourTo24Hour) * 60) + Number(startMin);
  const durationToMins = (Number(durationHour) * 60) + Number(durationMin);
  const totalTime = startHourTo24HourToMins + durationToMins;
  const dayCount = Math.floor(totalTime / dayToMins);
  let newTime = totalTime % dayToMins;
  let newTimeHour = (Math.floor(newTime / 60)) > 12 ? (Math.floor(newTime / 60)) - 12 : Math.floor(newTime / 60);
  let newTimeMin = String(newTime % 60).length === 1 ? "0" + String(newTime % 60) : String(newTime % 60);
  let newDay;
  let dayGiven = day[0].toUpperCase() + day.substring(1);
  let newDayMode = (Math.floor(newTime / 60)) > 11 ? "PM" : "AM";
  let answer;

  if (days.includes(dayGiven)) {
    let dayGivenIndex = days.indexOf(dayGiven);
    let newDayIndex = dayCount === 0 ? dayGivenIndex : dayGivenIndex + dayCount <= 6 ? dayGivenIndex + dayCount : (dayGivenIndex + dayCount) % 7;
    newDay = days[newDayIndex];
  }


  if (day === "Not given" && dayCount === 0) {
    answer = `${newTimeHour}:${newTimeMin} ${newDayMode}`;
  } else if (days.includes(dayGiven) && dayCount == 0) {
    answer = `${newTimeHour}:${newTimeMin} ${newDayMode}, ${dayGiven}`
  } else if (day === "Not given" && dayCount === 1) {
    answer = `${newTimeHour}:${newTimeMin} ${newDayMode} (next day)`;
  } else if (days.includes(dayGiven) && dayCount == 1) {
    answer = `${newTimeHour}:${newTimeMin} ${newDayMode} (next day)`;
  } else if (days.includes(dayGiven)) {
    answer = `${newTimeHour}:${newTimeMin} ${newDayMode}, ${newDay} (${dayCount} days later)`;
  } else if (day === "Not given" && dayCount > 1) {
    answer = `${newTimeHour}:${newTimeMin} ${newDayMode} (${dayCount} days later)`;
  }

  return answer;
}

console.log(addTime('3:30 PM', '2:12'));
console.log(addTime('11:55 AM', '3:12'));
console.log(addTime('2:59 AM', '24:00'));
console.log(addTime('11:59 PM', '24:05'));
console.log(addTime('8:16 PM', '466:02'));
console.log(addTime('3:30 PM', '2:12', 'Monday'));
console.log(addTime('2:59 AM', '24:00', 'Saturday'));
console.log(addTime('11:59 PM', '24:05', 'Wednesday'));
console.log(addTime('8:16 PM', '466:02', 'Tuesday'));
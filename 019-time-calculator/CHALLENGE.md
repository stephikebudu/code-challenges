# Time Calculator
**Challenge:** Write a function named add_time that takes in two required parameters and one optional parameter:
- A start time in the 12-hour clock format (ending in AM or PM)
- A duration time that indicates the number of hours and minutes
- (optional) A starting day of the week, case insensitive

**Constraints:**
- The function should add the duration time to the start time and return the result. 
- If the result will be the next day, it should show (next day) after the time. If the result will be more than one day later, it should show (n days later) after the time, where "n" is the number of days later.
- If the function is given the optional starting day of the week parameter, then the output should display the day of the week of the result. The day of the week in the output should appear after the time and before the number of days later.
- Expected time to end with '(next day)' when it is the next day.
- Expected period to change from AM to PM at 12:00.
- Expected adding 0:00 to return the initial time.

**Test cases:**
- Calling `add_time('3:30 PM', '2:12')` should return `'5:42 PM'`.
- Calling `add_time('11:55 AM', '3:12')` should return `'3:07 PM'`.
- Calling `add_time('2:59 AM', '24:00')` should return `'2:59 AM (next day)'`.
- Calling `add_time('11:59 PM', '24:05')` should return `'12:04 AM (2 days later)'`.
- Calling `add_time('8:16 PM', '466:02')` should return `'6:18 AM (20 days later)'`.
- Calling `add_time('3:30 PM', '2:12', 'Monday')` should return `'5:42 PM, Monday'`.
- Calling `add_time('2:59 AM', '24:00', 'Saturday')` should return `'2:59 AM, Sunday (next day)'`.
- Calling `add_time('11:59 PM', '24:05', 'Wednesday')` should return `'12:04 AM, Friday (2 days later)'`.
- Calling `add_time('8:16 PM', '466:02', 'Tuesday')` should return `'6:18 AM, Monday (20 days later)'`.

*Credit: [freeCodeCamp Learning Platform](https://www.freecodecamp.org/learn/)*
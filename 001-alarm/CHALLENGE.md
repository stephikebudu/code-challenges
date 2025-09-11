# Alarm
**Challenge**: Create a function which accepts an `alarm` parameter. This will be the time our alarm to wake up has been set. The function should then calculate the difference between the current time and the alarm time. Return that difference as a string in the format `${hours} hours and ${minutes} minutes of sleep`. For example, "3 hours and 45 minutes of sleep".

**Constraint**: There are about 1000 different ways to write a time. Could use a Date object, or an "HH:MM" string, is it 12 hour time or 24 hour time? You choose! You may choose whichever input format you would like to require for the `alarm` parameter. HOWEVER you MUST validate that input format - that is, if your function expects a 12 hour time, and I do not indicate AM/PM in my argument, the function should exit with feedback about the exact format you are expecting. Happy Hacking:purple_heart:

*Credit: freeCodeCamp*
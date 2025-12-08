# Screen Time
**Challenge:** Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

**Constraints:**
- If any single day has 10 hours or more, it's too much.
- If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
- If the average of the seven days is greater than or equal to 6 hours, it's too much.

**Test cases:**
- `tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7])` should return `false`.
- `tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3])` should return `false`.
- `tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6])` should return `false`.
- `tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4])` should return `true`.
- `tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0])` should return `true`.
- `tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4])` should return `true`.
- `tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6])` should return `true`.

*Credit: [freeCodeCamp Learning Platform](https://www.freecodecamp.org/learn/)*
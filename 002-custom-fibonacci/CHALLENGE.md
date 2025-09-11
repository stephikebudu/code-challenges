# Custom Fibonacci
You've probably heard of the Fibonacci sequence. It's that cool string of numbers that starts with `0` and `1`, and each following number is the sum of the two previous numbers.

But what if we *didn't* start with `0` and `1`. What if we started with different numbers entirely?

**Challenge:** Given an array containing the first two numbers of your sequence, and a number representing the length of your sequence, return a list of all numbers in that sequence up to the length.

**Test cases:**
- With `[0,1]` and `10`, return `[ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]`
- With `[1,1]` and `10`, return `[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]`
- With `[2,6]` and `15`, return `[ 2, 6, 8, 14, 22, 36, 58, 94, 152, 246, 398, 644, 1042, 1686, 2728 ]`
- With `[123456789,987654321]` and `5`, return `[ 123456789, 987654321, 1111111110, 2098765431, 3209876541 ]`

*Credit: freeCodeCamp*
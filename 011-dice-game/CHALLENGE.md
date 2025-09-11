# Dice Game
Let's play dice! You get five dice, which you roll all at once. You earn points for your roll based on the following table:

```
 Three 1s => 1000 points
 Three 6s =>  600 points
 Three 5s =>  500 points
 Three 4s =>  400 points
 Three 3s =>  300 points
 Three 2s =>  200 points
 One   1  =>  100 points
 One   5  =>   50 point
```

For example:

```
 Roll        Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
```

Note that each die can only be counted to a score once - that is, if you roll three 1s you can either claim 1000 points for the set, or 100 points for each individual 1, but you **cannot** claim 1300 points in total for both.

**Challenge:** Given an arrray of five integers representing your roll, return the number of points you should claim (higher is better, here).

**Test cases:** 
- With `[2, 3, 4, 6, 2]`, return `0`
- With `[1, 2, 3, 4, 6]`, return `100`
- With `[5, 2, 3, 4, 6]`, return `50`
- With `[1, 2, 3, 4, 5]`, return `150`
- With `[1, 1, 2, 3, 6]`, return `200`
- With `[2, 2, 3, 4, 6]`, return `0`
- With `[3, 3, 2, 4, 6]`, return `0`
- With `[4, 4, 2, 3, 6]`, return `0`
- With `[5, 5, 2, 3, 6]`, return `100`
- With `[6, 6, 2, 3, 4]`, return `0`
- With `[1, 1, 1, 3, 3]`, return `1000`

*Credit: freeCodeCamp*
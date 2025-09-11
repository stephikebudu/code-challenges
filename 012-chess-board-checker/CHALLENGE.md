# Chess Board Checker
So we're going to start a *chess* company. Our first step is to figure out if a given square on the chessboard is black or white.

Here's a representation of a chessboard:

```ascii
    a  b  c  d  e  f  g  h
8   .  *  .  *  .  *  .  *
7   *  .  *  .  *  .  *  .
6   .  *  .  *  .  *  .  *
5   *  .  *  .  *  .  *  .
4   .  *  .  *  .  *  .  *
3   *  .  *  .  *  .  *  .
2   .  *  .  *  .  *  .  *
1   *  .  *  .  *  .  *  .
    a  b  c  d  e  f  g  h
```

The `.` are white squares, the `*` are black squares! 

**Challenge:** Given a string consisting of a letter (representing the column) and a number (representing the row), return a string indicating the colour of the square at that position.

**Test cases:**
- With input `a8`, return `white`
- With input `c5`, return `black`
- With input `f2`, return `black`

*Credit: freeCodeCamp*
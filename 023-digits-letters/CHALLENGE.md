# Digits or Letters

**Challenge:** Given a string, return "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.

**Contraints:**
- Digits consist of 0-9.
- Letters consist of a-z in upper or lower case.
- Ignore any other characters.

**Test cases:**
- `digitsOrLetters("abc123")`should return `"tie"`.
- `digitsOrLetters("a1b2c3d")` should return `"letters"`.
- `digitsOrLetters("1a2b3c4")` should return `"digits"`.
- `digitsOrLetters("abc123!@#DEF")` should return `"letters"`.
- `digitsOrLetters("H3110 W0R1D")` should return `"digits"`.
- `digitsOrLetters("P455W0RD")` should return `"tie"`.


*Credit: [freeCodeCamp Learning Platform](https://www.freecodecamp.org/learn/)*
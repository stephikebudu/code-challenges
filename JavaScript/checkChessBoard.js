/*
PSEUDOCODE
Split the string
Check if first part of str is a num
  If yes, check if it is between 1 and 8
  Then ensure second part of string is a letter between a and h
Else check it should be a str and second part should be a num
Validate and register each part of the input string if its even or odd
Finally, return black for && and odd or even && even

CHESS BOARD
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

asterisk => black
dot => white
*/

function checkChessBoard(str) {
  let strNum;
  let strLetter;
  const chessLetters = "abcdefgh";
  const evenLetters = "bdfh";
  let numVal;
  let letterVal;
  let color;

  if (str.length > 2) {
    return "Please enter one letter for column and one letter for row";
  }

  if (typeof(str[0]) === "number") {
    if (str[0] > 0 && str[0] < 9) {
      strNum = str[0];
    } else {
      return "Please enter a valid whole number between '1' and '8' for chess board row";
    }

    if (chessLetters.includes(str[1].toLowerCase())) {
      strLetter = str[1];
    } else {
      return "Please enter valid letter between 'a' and 'h' for chess board column"
    }
  } else {
    if (chessLetters.includes(str[0].toLowerCase())) {
      strLetter = str[0];
    } else {
      return "Please enter valid letter between 'a' and 'h' for chess board column";
    }

    if (str[1] > 0 && str[1] < 9) {
      strNum = str[1];
    } else {
      return "Please enter a valid number between '1' and '8' for chess board row";
    }
  }

  strNum % 2 === 0 ? numVal = "even" : numVal = "odd";
  evenLetters.includes(strLetter) ? letterVal = "even" : letterVal = "odd";

  if (numVal === "even" && letterVal === "even" || numVal === "odd" && letterVal === "odd") {
    color = "black";
  } else {
    color = "white";
  }

  return color;
}

console.log(checkChessBoard("a8")); //white
console.log(checkChessBoard("c5")); //black
console.log(checkChessBoard("f2")); //black
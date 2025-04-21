/*
PSEUDOCODE
1. Write a function with input n that repeats a set of strings as far as n > 0
2. Make sure to incl. condition to terminate loop
3. Make sure to include newline character in song
*/

function sing(n) {
  let song = "";
  while (n > 0) {
    song += `\n${n} line of bugs in the code\n${n} line of bugs!\nTrack one down, patch it out\n${n - 1} line of bugs in the code!`;
    n--;
  }
  return song;
}

console.log(sing(1));
console.log(sing(2));
console.log(sing(5));
console.log(sing(100));
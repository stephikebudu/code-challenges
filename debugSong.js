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
console.log(sing(10));
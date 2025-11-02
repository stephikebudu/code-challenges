/*
1. Remove period from sentence
2. Split sentence into words by whitespace
3. Check for and return longeest word in sentennce
*/

function getLongestWord(str) {
  let refined = str.includes(".") ?  str.split(".") : str;
  let words = refined[0].split(" ");
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

getLongestWord("coding is fun.");
getLongestWord("Coding challenges are fun and educational.");
getLongestWord("This sentence has multiple long words.");
/*
1. Remove period from sentence
2. Split sentence into words by whitespace
3. Check for and return longest word in sentence
*/

function getLongestWord(str) {
  let refined = str.includes(".") ? str.split(".") : str.split();
  let words = refined[0].split(" ");
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  console.log(longest);
}

getLongestWord("coding is fun");
getLongestWord("Coding challenges are fun and educational.");
getLongestWord("This sentence has multiple long words.");
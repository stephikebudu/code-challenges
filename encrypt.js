/*
PSEUDOCODE
1. create a function to check for consonants and update the consonant in a word
2. call the function for each element of the word array starting from the current index of word
*/

// There is a bug in this version
/*function encrypt(str) {
  const strArr = str.split(" ");
  const consonantRegex = /[b-df-hj-np-tv-z]/gi
  let newChar
  let newWord = [];

  function updateWord(word) {
    for (let i = 0; i < word.length; i++) {
      if (word[i].match(consonantRegex)) {
        newChar = word[i] += "egg"
      } else {
        newChar = word[i]
      }
      newWord.push(newChar)
    }

    return newWord.join("")
  }


  const encryptedStrArr = strArr.map((w) => {
    return updateWord(w);
  })
  return encryptedStrArr.join(" ")
} */


  
/*
PSEUDOCODE
1. verify input
2. create consonant string manually
3. loop through input string, with each character check if its a consonant and add "egg" if it is, if its not leave as is
4. add (updated) character to new string variable
5. finally when loop is done return new string variable
*/

// Debugged version
function encrypt(str) {
  if (typeof str !== "string") {
    return "Type of input not allowed, enter a string enclosed in single or double quotation marks"
  }

  let encrypted = "";
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    encrypted += char;
    if (consonants.includes(char)) {
      encrypted += "egg"
    }
  }
  return encrypted;
}

console.log(encrypt("Hello to the freeCodeCamp Discord"));
console.log(encrypt("Steph needs to come up with harder challenges"));
console.log(encrypt("Maybe if she spent less time on TikTok she could"));
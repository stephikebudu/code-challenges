/*
PSEUDOCODE
1. create a function to check for consonants and update the consonant in a word
2. call the function for each element of the word array starting from the current index of word
*/

function encrypt(str) {
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
    console.log(w)
    return updateWord(w);
  })
  return encryptedStrArr.join(" ")
}

// console.log(encrypt("Hello to the freeCodeCamp Discord"));
// console.log(encrypt("Steph needs to come up with harder challenges"));
// console.log(encrypt("Maybe if she spent less time on TikTok she could"));
// console.log(encrypt("To her"));
console.log(encrypt("To her"))
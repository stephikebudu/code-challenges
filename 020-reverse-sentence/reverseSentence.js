function reverseSentence(str) {
  const newStr = str.split(" ").reverse().join(" ");
  return newStr
}

console.log(reverseSentence("world hello"))
console.log(reverseSentence("push commit git"))
console.log(reverseSentence("npm install sudo"))
console.log(reverseSentence("import default function export"))
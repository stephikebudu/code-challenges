/*
1. Clean string - lowercase and trim string
2. Filter characters with regex
3. Convert whitespace character to "%20"
*/

function generateSlug(str) {
  const notAllowed = /[^a-zA-Z0-9\s]/g;
  const joiner = "%20";
  let cleanStr = str.toLowerCase().trim();
  let slug = cleanStr.replace(notAllowed, "").split(" ").join(joiner)
  return slug;
}

console.log(generateSlug("helloWorld"));
console.log(generateSlug("hello world!"));
console.log(generateSlug(" hello-world "));
console.log(generateSlug("hello world"));
console.log(generateSlug(" ?H^3-1*1]0! W[0%R#1]D "));
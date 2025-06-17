/*
determine the characters in the base from the base passed as arg
enusre num is in caps
check if all characters in num exists in base
  if the character exists, add "good" to result var
  else add "bad" to result var
finally check if result var contains "bad"
  return true if "bad" substring does not exist
  else return false
*/

function isValidInBase(num, base) {
  let baseChars = "";
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let baseAlphabets;
  let numToCheck = num.toUpperCase();
  let result;

  if (typeof num !== "string") {
    return "Please make sure number to check is in string format"
  }

  if (base > 1 && base <= 10) {
    for (let i = base - 1; i >= 0; i--) {
      baseChars += i;
    }
  } else if (base > 10 && base <= 36) {
      baseAlphabets = alphabets.slice(0, base - 10);
      baseChars = "0123456789" + baseAlphabets;
  } else {
    return "Enter a valid number for base between 2 and 36 inclusive";
  }

  for (let i = 0; i < numToCheck.length; i++) {
    if (baseChars.includes(numToCheck[i])) {
      result += "good"
    } else {
      result += "bad"
    }
  }

  return !result.includes("bad");
}

console.log(isValidInBase("10101", 2))       //true
console.log(isValidInBase("10201", 2));      //false
console.log(isValidInBase("76543210", 8));   //true
console.log(isValidInBase("9876543210", 8)); //false
console.log(isValidInBase("9876543210", 10)) //true
console.log(isValidInBase("ABC", 10));       //false
console.log(isValidInBase("ABC", 16));       //true
console.log(isValidInBase("Z", 36));         //true
console.log(isValidInBase("ABC", 20));       //true
console.log(isValidInBase("4B4BA9", 16));    //true
console.log(isValidInBase("5G3F8F", 16));    //false
console.log(isValidInBase("5G3F8F", 17));    //true
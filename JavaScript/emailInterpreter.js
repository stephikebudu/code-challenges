/*
Broken keyboard can only type the words "RAGE" and "BURN" correctly. When you see those words, you need to convert them like so:
If you see 1 "RAGE", the email should start with "I am livid."
If you see 2 "RAGE", the email should start with "I am really livid."
If you see 3 "RAGE", the email should start with "I am really really livid."
And so on...

If you see 1 "BURN", the email should end with "You get a pay cut."
If you see 2 "BURN", the email should end with "You get a pay cut, and you get a pay cut."
If you see 3 "BURN", the email should end with "You get a pay cut, and you get a pay cut, and you get a pay cut."
And so on...

Challenge: Given a string representing what I have typed, return a string representing what the email will say.
*/

function emailInterpreter(str) {
  str.toUpperCase();

  const rage = "RAGE";
  const burn = "BURN";
  let rageCounter = 0;
  let newStr = "";
  let burnCounter = 0;

  //check the no of occurence for RAGE
  while (str.includes(rage)) {
    newStr = str.replace(rage, "");
    rageCounter++;
    str = newStr;
  }

  //check for no of occurence for BURN
  while (str.includes(burn)) {
    newStr = str.replace(burn, "");
    burnCounter++;
    str = newStr;
  }

  let rageStatement = rageCounter === 1 ? "I am livid." : `I am ${"really ".repeat(rageCounter - 1).trim()} livid.`;
  let burnStatement = burnCounter === 1 ? "You get a pay cut" : burnCounter === 2 ? "You get a pay cut, and you get a pay cut." : `You get a pay cut, ${"and you get a pay cut, ".repeat(burnCounter - 2).trim()} and you get a pay cut.`

  //IF both are 0 return appropriate string
  //ELSE construct the statement according to no of RAGE or BURN
  if (rageCounter === 0 && burnCounter === 0) {
    newStr += "Haha! Nice day for fishin', ain't it?";
  } else {
    newStr += rageStatement + " " + burnStatement
  }

  //return new string
  console.log(newStr)
}

// Test cases
console.log(emailInterpreter("")); // "Haha! Nice day for fishin', ain't it?"
console.log(emailInterpreter("RAGE")); // "I am livid."
console.log(emailInterpreter("RAGERAGERAGE")); // I am really really livid.
console.log(emailInterpreter("BURN")); // You get a pay cut.
console.log(emailInterpreter("BURNBURNBURN")); // You get a pay cut, and you get a pay cut, and you get a pay cut.
console.log(emailInterpreter("RAGERAGEBURNRAGEBURN")); // I am really really livid. You get a pay cut, and you get a pay cut.
console.log(emailInterpreter("asdfqwe")); // Haha! Nice day for fishin', ain't it?
console.log(emailInterpreter("ASDRAGEZXCVBURNQWERAGERAGEBURNYTUIOPRAGEBURNMNBBURNRAGEBURN")); // I am really really really really livid. You get a pay cut, and you get a pay cut, and you get a pay cut, and you get a pay cut, and you get a pay cut.
/*
develop regex you'll use to check the string
use regex.test(str) //should output true or false
*/

function validateIP(ip) {
  const octet = "(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])";
  const validIPRegex = new RegExp(`^${octet}\\.${octet}\\.${octet}\\.${octet}$`);
  return validIPRegex.test(ip);
}

console.log(validateIP("255.45.67.89")); //true
console.log(validateIP("256.1.2.3")); //false
console.log(validateIP("0.0.0.0")); //true
console.log(validateIP("1.2.3.4\n")); //false
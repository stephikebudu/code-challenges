/*
Pseudocode
return appropriate string based on if current temp is greater, less or equivalent to target temp
*/

function adjustThermostat(roomTemp, targetTemp) {
  let ans = roomTemp < targetTemp ? "heat" : roomTemp > targetTemp ? "cool" : roomTemp == targetTemp ? "hold" : "Please enter valid temperatures."
  console.log(ans);
}
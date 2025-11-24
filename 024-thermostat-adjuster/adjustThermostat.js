/*
Pseudocode
return appropriate string based on if current temp is greater, less or equivalent to target temp
*/

function adjustThermostat(roomTemp, targetTemp) {
  let ans = roomTemp < targetTemp ? "heat" : roomTemp > targetTemp ? "cool" : roomTemp == targetTemp ? "hold" : "Please enter valid temperatures."
  console.log(ans);
}

adjustThermostat(68, 72);
adjustThermostat(75, 72);
adjustThermostat(72, 72);
adjustThermostat(-20.5, -10.1);
adjustThermostat(100, 99.9);
adjustThermostat(0.0, 0.0);
'''
Pseudocode
return appropriate string based on if current temp is greater, less or equivalent to target temp
'''

def adjust_thermostat(current, target):
  ans = "heat" if current < target else ("cool" if current > target else ("hold" if current == target else ""))
  print(ans)

adjust_thermostat(68, 72)
adjust_thermostat(75, 72)
adjust_thermostat(72, 72)
adjust_thermostat(-20.5, -10.1)
adjust_thermostat(100, 99.9)
adjust_thermostat(0.0, 0.0)
'''
Pseudocode
return appropriate string based on if current temp is greater, less or equivalent to target temp
'''

def adjust_thermostat(current, target):
  ans = "heat" if current < target else ("cool" if current > target else ("hold" if current == target else ""))
  print(ans)

'''
Pseudocode
1. Init answer var as "False"
2. Loop through array
3. Define conditions according to constraints
    IF condition, update answer to "True"
    IF NOT condition, continue
4. Return answer
'''

def too_much_screen_time(hour_list):
  answer = False
  for index, element in enumerate(hour_list):
    if element >= 10 or index < 5 and ((hour_list[index] + hour_list[index + 1] + hour_list[index + 2]) / 3) >= 8 or (sum(hour_list) / 7) >= 6:
      answer = True
  return answer
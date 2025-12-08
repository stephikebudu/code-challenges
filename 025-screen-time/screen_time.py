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

print(too_much_screen_time([1, 2, 3, 4, 5, 6, 7]))
print(too_much_screen_time([7, 8, 8, 4, 2, 2, 3]))
print(too_much_screen_time([5, 6, 6, 6, 6, 6, 6]))
print(too_much_screen_time([1, 2, 3, 11, 1, 3, 4]))
print(too_much_screen_time([1, 2, 3, 10, 2, 1, 0]))
print(too_much_screen_time([3, 3, 5, 8, 8, 9, 4]))
print(too_much_screen_time([3, 9, 4, 8, 5, 7, 6]))
'''
Pseudocode
1. Loop list and assign first list element to first_num variable
2. Check if sum of first num and any other num in list equals target
    If yes, return index of both
3. Ensure the indices are in a sorted list
'''

def find_target(num_list, target):
  first_num_i, second_num_i, result = None, None, ""
  for index, el in enumerate(num_list):
    if index < len(num_list) - 1: # to fix "list index out of range" error
      if num_list[index] + num_list[index + 1] == target:
        first_num_i = index
        second_num_i = index + 1

  if first_num_i is None:
    result = "Target not found"
  else:
    result = [first_num_i, second_num_i]

  return result
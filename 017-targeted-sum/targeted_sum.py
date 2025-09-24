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

print(find_target([2, 7, 11, 15], 9)) # returns [0, 1]
print(find_target([3, 2, 4, 5], 6)) # returns [1, 2]
print(find_target([1, 3, 5, 6, 7, 8], 15)) # returns [4, 5]
print(find_target([1, 3, 5, 7], 14)) # returns "Target not found"
'''
Calculate the missing number in mean calculation, using array as the rest of the numbers and average as target
'''

def pr_checker(list, avg):
  total = sum(list);
  min_quality = (avg * (len(list) + 1)) - total

  return min_quality
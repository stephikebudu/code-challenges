'''
Calculate the missing number in mean calculation, using array as the rest of the numbers and average as target
'''

def pr_checker(list, avg):
  total = sum(list);
  min_quality = (avg * (len(list) + 1)) - total

  return min_quality

print(pr_checker([1,1,1], 2)) # returns 5
print(pr_checker([1,1,1,1], 2)) # returns 6
print(pr_checker([50,60,70,80,90], 70)) # returns 70
print(pr_checker([50,50,50,50,50], 70)) # returns 170
print(pr_checker([25,30,15,80], 100)) # returns 350
print(pr_checker([86,77,48,52,90,73,44,99], 85)) # returns 196
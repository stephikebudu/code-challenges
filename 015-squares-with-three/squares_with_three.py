'''
Pseudocode
1. validate input
2. init list to store total number of squares with three
3. check through range - 1 up to num
  4. if any num squared has 3, add it to total list initialized above
5. count and return number of list elements
'''

def squares_with_three(num):
  if num < 1 or num > 10000:
    return "Please enter a number in the range 1 - 10000 (both inclusive)"

  total_squares_with_three = []
  for i in range(num):
    if "3" in str(i ** 2):
      total_squares_with_three.append(i)

  return len(total_squares_with_three)


print(squares_with_three(1)); # returns 0
print(squares_with_three(10)); # returns 1
print(squares_with_three(100)); # returns 19
print(squares_with_three(1000)); # returns 326
print(squares_with_three(10000)); # returns 4531
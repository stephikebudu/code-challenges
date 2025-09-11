import re

'''
determine the characters in the base from the base passed as arg
enusre num is in caps
check if all characters in num exists in base
  if the character exists, add "good" to result var
  else add "bad" to reesult var
finally check if result var contains "bad"
  return true if "bad" substring does not exist
  else return false
'''

def is_valid_in_base(num, base):
  alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  num_to_check = num.upper()
  base_chars = ""
  result = ""

  if base >= 2 and base <= 10:
    for i in range(base):
      base_chars += str(i)
  elif base > 10 and base <= 36:
    base_alphabets = alphabets[0:base - 10]
    base_chars = "0123456789" + base_alphabets
  else:
    return "Please enter a base between 2 and 36 inclusive"

  for char in num_to_check:
    if char in base_chars:
      result += "good"
    else:
      result += "bad"

  if re.search("bad", result):
    return False
  else:
    return True

print(is_valid_in_base("10201", 2));      #False
print(is_valid_in_base("76543210", 8));   #True
print(is_valid_in_base("10101", 2))       #True
print(is_valid_in_base("9876543210", 8)); #False
print(is_valid_in_base("9876543210", 10)) #True
print(is_valid_in_base("ABC", 10));       #False
print(is_valid_in_base("ABC", 16));       #True
print(is_valid_in_base("Z", 36));         #True
print(is_valid_in_base("ABC", 20));       #True
print(is_valid_in_base("4B4BA9", 16));    #True
print(is_valid_in_base("5G3F8F", 16));    #False
print(is_valid_in_base("5G3F8F", 17));    #True
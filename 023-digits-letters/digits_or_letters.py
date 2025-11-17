import re

'''
Pseudocode
1. Use regex to check for digits/letters,
2. Store all letters/digits found in str in list arr
3. Compare length of both lists, if digits/letters are more or both are equal and return appropriate ans
'''

def digits_or_letters(text):
  dig_reg = r"[0-9]"
  let_reg = r"[a-zA-Z]"
  letters = re.findall(let_reg, text)
  nums = re.findall(dig_reg, text)
  answer = "letters" if len(letters) > len(nums) else "digits" if len(nums) > len(letters) else "tie"
  print(answer)

digits_or_letters("abc123")
digits_or_letters("a1b2c3d")
digits_or_letters("1a2b3c4")
digits_or_letters("abc123!@#DEF")
digits_or_letters("H3110 W0R1D")
digits_or_letters("P455W0RD")
import re

'''
PSEUDOCODE
Split the string
Check if first part of str is a num
  If yes, check if it is between 1 and 8
  Then ensure second part of string is a letter between a and h
Else it should be a str and second part should be a num
Validate and register each part of the input string if its even or odd
Finally, return black for && and odd or even && even

CHESS BOARD
    a  b  c  d  e  f  g  h
8   .  *  .  *  .  *  .  *
7   *  .  *  .  *  .  *  .
6   .  *  .  *  .  *  .  *
5   *  .  *  .  *  .  *  .
4   .  *  .  *  .  *  .  *
3   *  .  *  .  *  .  *  .
2   .  *  .  *  .  *  .  *
1   *  .  *  .  *  .  *  .
    a  b  c  d  e  f  g  h

asterisk => black
dot => white
'''

def check_chess_board(str):
  if len(str) > 2:
    return "Please enter one letter for column and one number for row on the board"

  if str[0].isalpha():
    if re.search(r"[a-h]", str[0]):
      letter = str[0].lower()
      number = int(str[1]) if int(str[1]) > 0 and int(str[1]) < 9 else "no value"
    else:
      return "Please enter a valid letter between a and h (both inclusive) to represent the board column"
  elif isinstance(int(str[0]), int):
    if int(str[0]) > 0 and int(str[0]) < 9:
      number = int(str[0])
      letter = re.search(r"[a-h]", str[1].lower()) and str[1] or  "no value"
    else:
      return "Please enter a valid number between 1 and 8 (both inclusive) to represent the board row"
  else:
    return "Please enter one valid letter (a-h) for column and one valid number (1-8) for row on the board"

  if letter == "no value" or number == "no value":
    return "Please enter one valid letter (a-h) for column and one valid number (1-8) for row on the board"

  pass
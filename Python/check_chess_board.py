import re

'''
PSEUDOCODE
Split the string
Check if first part of str is a letter
  If yes, check if its in range a-h
    If yes, validate and ensure 2nd part of str is number and in range 1-8
  Else return error message
Else check if first part of str is a number
  If yes, check if its in range 1-8
    If yes, validate and ensure 2nd part of str is alphabet and in range a-h
  Else return error message
Determine if each part of str is even or odd
Finally, return black for even and even or odd and odd. Else return white

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

  if re.search(r"b|d|f|h", letter):
    letter_val = "even"
  else:
    letter_val = "odd"

  number_val = number % 2 == 0 and "even" or "odd"

  if letter_val == "even" and number_val == "even" or letter_val == "odd" and number_val == "odd":
    board_color = "black"
  else:
    board_color = "white"

  return board_color


print(check_chess_board("a8")) # white
print(check_chess_board("c5")) # black
print(check_chess_board("f2")) # black
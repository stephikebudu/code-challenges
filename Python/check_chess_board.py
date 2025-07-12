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


import math

'''
PSEUDOCODE
separate dollar amount and cent amount by rounding down given price to get dollar amount. Subtract dollar amount from price and round difference to one decimal place to get cent amount
check if cent amount is less than 0.3
  then price would be dollar amount
check if cent amount is more than 0.2 and less than 0.8
  then price would be cent amount plus 0.5
else
  round up price
'''
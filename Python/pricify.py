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

def pricify(price):
  dollar_amount = math.floor(price)
  cent_amount = round(price - dollar_amount, 1)

  if cent_amount < 0.3:
    new_price = dollar_amount
  elif cent_amount > 0.2 and cent_amount < 0.8:
    new_price = dollar_amount + 0.5
  else:
    new_price = math.ceil(price)

  return new_price
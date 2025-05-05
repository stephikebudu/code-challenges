import math

'''
PSEUDOCODE
1. calculate the price by dividing cost by area
2. area of a (circular) pizza is pi * ((d/2)squared)
3. finally use the round() method to resolve to 2 decimal places
'''

def pizzaPrice(d, cost):
  price = cost / (math.pi * ((d/2) ** 2))
  return f'{round(price, 2)}'

print(f'Pizza costs {pizzaPrice(7, 4.30)} USD per square inch')
print(f'Pizza costs {pizzaPrice(9, 5.95)} USD per square inch')
print(f'Pizza costs {pizzaPrice(12, 7.90)} USD per square inch')
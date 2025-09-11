import math

'''
Pseudocode
1. Validate input to ensure year is >= 1924
2. Get the difference in birth year and 1924
3. Determine animal index. Get animal index by calculating yearDifference % animals.length
4. Determine element index. Because the element changes every 2 years divide yearDifference by 2 first and round down to ensure you hav a whole num, then calculate new yearDifference % elements.length
5. then return the element and string as a string
'''

animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"]
elements = ["Wood", "Fire", "Earth", "Metal", "Water"]

def findZodiac(n):
  if n < 1924:
    print(f"{n} is less than 1924. Please enter a year greater than 1923")

  year_diff = n - 1924

  animal_index = year_diff % len(animals)
  animal = animals[animal_index]

  element_index = math.floor(year_diff / 2) % len(elements)
  element = elements[element_index]

  return f"{element} {animal}"

print(findZodiac(1924))
print(findZodiac(1965))
print(findZodiac(1938))
print(findZodiac(1998))
print(findZodiac(2016))
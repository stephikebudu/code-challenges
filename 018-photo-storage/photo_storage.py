import math

def number_of_photos(size, drive_capacity):
  return math.floor((drive_capacity * 1000) / size)

print(number_of_photos(1, 1))
print(number_of_photos(2, 1))
print(number_of_photos(4, 256))
print(number_of_photos(3.5, 750))
print(number_of_photos(3.5, 5.5))

# Astrologer
I'm going to become an astrologer! In order to set up shop, we need to be able to determine someone's Zodiac. Now, to do that, we'll need a bit of information. First, we need the list of elements: `["Wood", "Fire", "Earth", "Metal", "Water"]`. And we need the list of animals: `["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"]`

The animal changes every year, while the element changes every two years.

We're going to start tracking from an epoch of `1924`, which would begin with `"Wood Rat"`. `1925`, then, would be `"Wood Ox`, and `1926` would be `"Fire Tiger"`. When the end of one of the lists is reached, return to the beginning.  This results in a complete cycle every 60 years.

**Challenge:** Given a number representing the year someone was born, where `n >= 1924`, return a string containing their element and animal (e.g. Wood Rat).

**Test Cases:**
With input `1924`, return `Wood Rat`
With input `1965`, return `Wood Snake`
With input `1938`, return `Earth Tiger`
With input `1998`, return `Earth Tiger`
With input `2016`, return `Fire Monkey`
With input `1924`, return `Wood Rat`
With input `1968`, return `Earth Monkey`
With input `2162`, return `Water Dog`
With input `6479`, return `Earth Goat`
With input `3050`, return `Metal Dog`
With input `6673`, return `Water Rooster`
With input `6594`, return `Wood Tiger`
With input `9911`, return `Metal Goat`
With input `2323`, return `Water Rabbit`
With input `3448`, return `Earth Rat`
With input `1972`, return `Water Rat`

*Credit: freeCodeCamp*
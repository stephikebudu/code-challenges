'''
1. Remove period from sentence
2. Split sentence into words by whitespace
3. Check for and return longest word in sentence
'''


def get_longest_word(sentence):
  refined = sentence.split(".") if "." in sentence else [sentence]
  words = refined[0].split(" ")
  longest = words[0]
  for word in words:
    if len(word) > len(longest):
      longest = word
  print(longest)
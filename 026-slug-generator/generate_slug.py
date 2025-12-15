import re

'''
1. Clean string - lowercase and trim string
2. Filter characters with regex
3. Convert whitespace character to "%20" and return final transformed text
'''

def generate_slug(text):
  not_allowed = r"[^\w\s]"
  clean_text = text.lower().strip()
  slug = re.sub(not_allowed, "", clean_text)
  return re.sub(" ", "%20", slug)

print(generate_slug("helloWorld"))
print(generate_slug("hello world!"))
print(generate_slug(" hello-world "))
print(generate_slug("hello world") )
print(generate_slug(" ?H^3-1*1]0! W[0%R#1]D "))
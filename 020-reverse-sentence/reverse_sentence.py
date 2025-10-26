def reverse_sentence(input_str):
  str_list  = input_str.split(" ")
  str_list.reverse()
  new_str = " ".join(str_list)
  return new_str

print(reverse_sentence("world hello"))
print(reverse_sentence("push commit git"))
print(reverse_sentence("npm install sudo"))
print(reverse_sentence("import default function export"))
def reverse_sentence(input_str):
  str_list  = input_str.split(" ")
  str_list.reverse()
  new_str = " ".join(str_list)
  return new_str
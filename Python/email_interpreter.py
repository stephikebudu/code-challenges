'''
Broken keyboard can only type the words "RAGE" and "BURN" correctly. When you see those words, you need to convert them like so:
If you see 1 "RAGE", the email should start with "I am livid."
If you see 2 "RAGE", the email should start with "I am really livid."
If you see 3 "RAGE", the email should start with "I am really really livid."
And so on...

If you see 1 "BURN", the email should end with "You get a pay cut."
If you see 2 "BURN", the email should end with "You get a pay cut, and you get a pay cut."
If you see 3 "BURN", the email should end with "You get a pay cut, and you get a pay cut, and you get a pay cut."
And so on...

Challenge: Given a string representing what I have typed, return a string representing what the email will say.
'''

def email_interpreter(str):
  rage = "RAGE"
  burn = "BURN"
  rage_counter = str.upper().count(rage)
  burn_counter = str.upper().count(burn)
  really = "really "
  pay_cut = "and you get a pay cut, "
  newStr = ""

  # construct statements based on occurrence for RAGE
  rage_statement = "I am livid." if rage_counter == 1 else f"I am {really * (rage_counter - 1)} livid."

  # contruct statements based on occurrence for BURN
  burn_statement = "You get a pay cut." if burn_counter == 1 else ("You get a pay cut, and you get a pay cut." if burn_counter == 2 else f"You get a pay cut, {pay_cut * (burn_counter - 2)} and you get a pay cut.")

  # IF both are 0 return appropriate string
  # ELSE return constructed statements
  if burn_counter == 0 and rage_counter == 0:
    newStr += "Haha! Nice day for fishin', ain't it?"
  elif burn_counter == 0:
    newStr += rage_statement
  elif rage_counter == 0:
    newStr += burn_statement
  else:
    newStr += rage_statement + " " + burn_statement

  # return new str
  return newStr
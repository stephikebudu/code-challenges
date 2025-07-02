import re

'''
develop regex to check for the octet value
check if string matches regex and return True or False depending on result
'''

def validate_ip(ip):
  octet = r"(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])"
  valid_ip_regex = re.compile(r"^" +  octet + r"\." + octet + r"\." + octet + r"\." + octet + r"$")
  return bool(valid_ip_regex.match(ip))

print(validate_ip("255.45.67.89")) # True
print(validate_ip("256.1.2.3")) # False
print(validate_ip("0.0.0.0")) # True
print(validate_ip("1.2.3.4\n")) # False
import math

'''
1. Split and transform input time to number format (in seconds)
2. Calculate total time (in sec) divided by mile to get avg minutes
3. Calculate total time (in sec) modulo mile to get avg seconds
Remember to round down both values to nearest whole number and transform back to string after calc
4. Check if the min or sec str len is 1, if yes, pad with 0 appropriately
5. Combine and return final str
'''

def mile_pace(mile, time):
  avg_time = ""

  if mile == 1:
    avg_time = time
  else:
    time_list = time.split(":")
    time_to_sec = (int(time_list[0]) * 60) + int(time_list[1])
    avg_min = "0" + str(math.floor((time_to_sec // mile) // 60)) if len(str(math.floor((time_to_sec // mile) // 60))) == 1 else str(math.floor((time_to_sec // mile) // 60))
    avg_sec = str(math.floor((time_to_sec // mile) % 60)) + "0" if len(str(math.floor((time_to_sec // mile) % 60))) == 1 else str(math.floor((time_to_sec // mile) % 60))
    avg_time = avg_min + ":" + avg_sec

  return avg_time
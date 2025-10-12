import math

'''
Pseudocode
1. Declare constants - days of the week and day to minutes variables.
2. Separate hour and minute in given start time and duration
3. Transform given start time from 12 hour format to 24 hour format to diffeerentiate between before and after noon
4. Transform given start time and duration to minutes format.
5. Calc total time = start time in minutes + duration time to minutes
6. Calc days later = total time (already in minutes) / total number of minutes in a a day
7. Calc new time in new day = total time modulo total number of minutes in a day
8. From new time, extract hour and minute section by calculating new time in new day divided by 60minutes and new time in new day modulo 60minutes respectively
9. Determine before/after noon, check if new time is in AM or PM using new time hour
10. Calc new day by adding days later to given day index in days of the week array. RM to check if total is less than max index and divide by 7 days a week when necessary
11. Use new time hour, new time minute, days later and before/after noon variables
'''

def add_time(start, duration, day="Not given"):
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  day_to_mins = 24 * 60
  [start_time, day_mode] = start.split(" ")
  [start_hour, start_min] = start_time.split(":")
  start_hour_to_24_hour = 0

  if day_mode == "AM" and start_hour == "12":
    start_hour_to_24_hour = 0
  elif day_mode == "PM" and int(start_hour) < 12:
    start_hour_to_24_hour = int(start_hour) + 12
  else:
    start_hour_to_24_hour = int(start_hour)

  [duration_hour, duration_min] = duration.split(":")
  start_time_to_min = (start_hour_to_24_hour * 60) + int(start_min)
  duration_to_min = (int(duration_hour) * 60) + int(duration_min)

  total_time = start_time_to_min + duration_to_min
  day_count = math.floor(total_time / day_to_mins)
  new_time = total_time % day_to_mins
  new_time_hour = math.floor(new_time / 60)
  new_time_min = new_time % 60 if len(str(new_time % 60)) > 1 else "0" + str(new_time % 60)
  new_day_mode = "PM" if new_time_hour > 11 else "AM"
  new_time_hour_to_12_hour = math.floor(new_time / 60) - 12 if math.floor(new_time / 60) > 12 and new_day_mode == "PM" else 12 if math.floor(new_time / 60) == 0 else math.floor(new_time / 60)
  day_given = day.capitalize()
  new_day = ""

  if day_given in days:
    day_given_index = days.index(day_given)
    new_day_index = day_given_index if day_count == 0 else day_given_index + day_count if day_given_index + day_count <= 6 else (day_given_index + day_count) % 7
    new_day = days[new_day_index]

  answer = ""

  if day_given in days and day_count == 0:
    answer = f"{new_time_hour_to_12_hour}:{new_time_min} {new_day_mode}, {new_day}"
  elif day_given in days and day_count == 1:
    answer = f"{new_time_hour_to_12_hour}:{new_time_min} {new_day_mode}, {new_day} (next day)"
  elif day_given in days and day_count > 1:
    answer = f"{new_time_hour_to_12_hour}:{new_time_min} {new_day_mode}, {new_day} ({day_count} days later)"
  elif day_given == "Not given" and day_count == 0:
    answer = f"{new_time_hour_to_12_hour}:{new_time_min} {new_day_mode}"
  elif day_given == "Not given" and day_count == 1:
    answer = f"{new_time_hour_to_12_hour}:{new_time_min} {new_day_mode} (next day)"
  elif day_given == "Not given" and day_count > 1:
    answer = f"{new_time_hour_to_12_hour}:{new_time_min} {new_day_mode} ({day_count} days later)"
  else:
    answer = "I'm unaccounted for!"

  return answer


print(add_time('3:30 PM', '2:12'))
print(add_time('11:55 AM', '3:12'))
print(add_time('2:59 AM', '24:00'))
print(add_time('11:59 PM', '24:05'))
print(add_time('8:16 PM', '466:02'))
print(add_time('3:30 PM', '2:12', 'Monday'))
print(add_time('2:59 AM', '24:00', 'Saturday'))
print(add_time('11:59 PM', '24:05', 'Wednesday'))
print(add_time('8:16 PM', '466:02', 'Tuesday'))
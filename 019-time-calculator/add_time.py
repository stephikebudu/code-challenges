'''
Pseudocode
1. Declare constants - days of the week and day to minutes variablees.
2. Transform given start time from 12 hour format to 24 hour format to diffeerentiate between before and after noon
3. Transform given start time and duration to minutes format.
4. Calc total time = start time in minutes + duration time to minutes
5. Calc days later = total time (already in minutes) / total number of minutes in a a day
6. Calc new time in new day = total time modulo total number of minutes in a day
7. From new time, extract hour and minute section by calculating new time in new day divided by 60minutes and new time in new day modulo 60minutes respectively
8. Determine before/after noon, check if new time is in AM or PM using new time hour
9. Calc new day by adding days later to given day index in days of the week array. RM to check if total is less than max index and divide by 7 days a week when necessary
10. Use new time hour, new time minute, days later and before/after noon variables
'''

def add_time(start, duration, day="Not given"):
  pass
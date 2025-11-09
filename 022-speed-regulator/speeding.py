'''
1. Identify vehicles over speed limit and put in list
2. Get total number and return as first element in answer list
3. Calculate difference between speed limit and cars that are over speed limit and return as 2nd element in answer list
4. REM to account for cases where no car or 1 car is over speed limit
'''

def speeding(speeds, limit):
  over_limits = []
  for speed in speeds:
    if speed > limit:
      over_limits.append(speed)

  avg = sum(over_limits)/len(over_limits) if len(over_limits) > 1 else None
  info = [0, 0] if len(over_limits) == 0 else [1, over_limits[0] - limit] if len(over_limits) == 1 else [len(over_limits), avg - limit]
  print(info)
  return
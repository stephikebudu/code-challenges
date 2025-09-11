# Pull Request (PR) Checker
The code I write is given an automated quality score based on a variety of metrics. Each PR I write is "graded", and I must be at a specific score or higher by the end of the week or I'll be demoted. Thankfully I can run the quality checks locally, so I can make sure my job is safe before making my last pull for the week.

**Challenge:** Given an array of previous scores, and a target average, determine the minimum quality I must attain on one final contribution to keep my job.

**Test cases:**
- With `[1,1,1]` and `2`, return `5`.
- With `[1,1,1,1]` and `2`, return `6`.
- With `[50,60,70,80,90]` and `70`, return `70`. 
- With `[50,50,50,50,50]` and `70`, return `170`.
- With `[25,30,15,80]` and `100`, return `350`.
- With `[86,77,48,52,90,73,44,99]` and `85`, return `196`.

*Credit: freeCodeCamp*
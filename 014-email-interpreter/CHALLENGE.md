# Email Interpreter
My laptop keyboard has been broken for days, and they refuse to fix it! I'm going to send the IT department a strongly worded email, but with my broken keyboard I can only type a few characters so I need your help. I need a function that can look for the words `RAGE` and `BURN`. When you see those words, you need to convert them like so:

- If you see 1 `RAGE`, the email should start with "I am livid."
- If you see 2 `RAGE`, the email should start with "I am really livid."
- If you see 3 `RAGE`, the email should start with "I am really really livid."
- And so on...

- If you see 1 `BURN`, the email should end with "You get a pay cut."
- If you see 2 `BURN`, the email should end with "You get a pay cut, and you get a pay cut."
- If you see 3 `BURN`, the email should end with "You get a pay cut, and you get a pay cut, and you get a pay cut."
- And so on...

If you see NO `RAGE` and NO `BURN`, the email should say "Haha! Nice day for fishin', ain't it?"
-# Bonus points if you get that reference without looking it up

**Here is your challenge:** Given a string representing what I have typed, return a string representing what the email will say.

**Test cases:**
- With `""`, return `Haha! Nice day for fishin', ain't it?`
- With `RAGE`, return `I am livid.`
- With `RAGERAGERAGE`, return `I am really really livid.`
- With `BURN`, return `You get a pay cut.`
- With `BURNBURNBURN`, return `You get a pay cut, and you get a pay cut, and you get a pay cut.`
- With `RAGERAGEBURNRAGEBURN`, return `I am really really livid. You get a pay cut, and you get a pay cut.`
- With `asdfqwe`, return `Haha! Nice day for fishin', ain't it?`
- With `ASDRAGEZXCVBURNQWERAGERAGEBURNYTUIOPRAGEBURNMNBBURNRAGEBURN`, return `I am really really really really livid. You get a pay cut, and you get a pay cut, and you get a pay cut, and you get a pay cut, and you get a pay cut.`

**BONUS MODE:** Do it without regular expressions!

*Credit: freeCodeCamp*
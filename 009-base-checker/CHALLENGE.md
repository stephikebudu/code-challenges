# Bas Checker
What if we had a function that could validate any base system?

So for a binary (or base 2) number, it is valid only if all digits are within 0-1. For an octal, or base-8, digits must be within 0-7. For decimal, 0-9. For hexadecimal, 0-F. And for base-36, 0-Z.

Let's not go higher than base 36. 

**Challenge:** Given a non-negative integer `n` and a base `b`, return a boolean indicating if the number is valid in the base-b system.

**Test cases:**
With input `10101` and `2`, return `true`,
With input `10201` and `2`, return `false`,
With input `76543210` and `8`, return `true`,
With input `9876543210` and `8`, return `false`,
With input `9876543210` and `10`, return `true`,
With input `ABC` and `10`, return `false`,
With input `ABC` and `16`, return `true`,
With input `Z` and `36`, return `true`,
With input `ABC` and `20`, return `true`,
With input `4B4BA9` and `16`, return `true`,
With input `5G3F8F` and `16`, return `false`,
With input `5G3F8F` and `17`, return `true`.

*Credit: freeCodeCamp*
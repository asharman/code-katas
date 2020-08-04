Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: `42145` Output: `54421`

Input: `145263` Output: `654321`

Input: `123456789` Output: `987654321`

[View Kata](https://www.codewars.com/kata/5467e4d82edf8bbf40000155)

# Notes

The sort array method will work on strings of digits because the default sort is based on Unicode values.

I didn't need to map each digit and convert them back to an integer.

I also could have made use of the reverse array method instead of creating my own sort function to change the order.

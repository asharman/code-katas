# Find the Parity Outlier

[View Kata](https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript)

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples

```
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
```

## Notes

Final approach looks at the first three elements of the array to determine the "eveness" of the array. Afterwards loop through and find the first element (in this case the only element) that does not match the "eveness"

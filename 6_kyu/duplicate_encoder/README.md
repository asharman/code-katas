# Duplicate Encoder

[View Kata](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c)

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

## Examples

```
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
```

# Notes

I could have just used indexOf and lastIndexOf array methods. If they are the same index then the element is the only one in the array.
The functional array methods also pass in the actual array into the function as the 3rd parameter, I should remember to use that more often.

Top rated answer:

```javascript
function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split('')
        .map(function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
        })
        .join('');
}
```

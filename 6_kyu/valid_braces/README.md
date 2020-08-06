# Valid Braces

[View Kata](https://www.codewars.com/kata/5277c8a221e209d3f6000b56/solutions/javascript)

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

### What is considered Valid?

A string of braces is considered valid if all braces are matched with the correct brace.

Examples

```
"(){}[]" => True
"([{}])" => True
"(}" => False
"[(])" => False
"[({})](]" => False
```

# Notes

Highest rated answer has a similar approach but is much more succinct.

1. I didn't have to split the string because strings can be iterated over
2. I was trying to think of a way of representing the matching braces as an object and this is a clever way to do it!
3. I didn't have to do that check at the bottom with the if / else block because I wanted to return a boolean anyways
4. I notice that I like to create a lot of variables, when not all of them are necessary, specifically `lastOpenedBrace` in my solution

```javascript
function validBraces(braces) {
    var matches = { '(': ')', '{': '}', '[': ']' };
    var stack = [];
    var currentChar;

    for (var i = 0; i < braces.length; i++) {
        currentChar = braces[i];

        if (matches[currentChar]) {
            // opening braces
            stack.push(currentChar);
        } else {
            // closing braces
            if (currentChar !== matches[stack.pop()]) {
                return false;
            }
        }
    }

    return stack.length === 0; // any unclosed braces left?
}
```

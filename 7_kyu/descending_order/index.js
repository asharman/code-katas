// First attempt

function descendingOrder(n) {
    return parseInt(
        n
            .toString()
            .split('')
            .map((digit) => parseInt(digit))
            .sort((a, b) => b - a)
            .join('')
    );
}

// Highest rated solution

function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''));
}

// The sort array method will work on strings of digits because the default sort is based on Unicode values.
// I didn't need to map each digit and convert them back to an integer.
// I also could have made use of the reverse array method instead of creating my own sort function to change the order.

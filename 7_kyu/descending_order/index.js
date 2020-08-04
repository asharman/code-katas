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

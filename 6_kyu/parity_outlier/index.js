// First attempt
function findOutlier(integers) {
    return integers.reduce((acc, cur, i, arr) => {
        return Math.abs(cur % 2) === Math.abs(arr[i - 1] % 2)
            ? acc
            : arr[i - 1];
    }, 0);
}

// Second Attempt
function findOutlier(integers) {
    const firstThree = [integers[0], integers[1], integers[2]];

    const evenCount = firstThree.reduce((acc, cur) => {
        return cur % 2 === 0 ? ++acc : acc;
    }, 0);

    const eveness = Math.abs(evenCount >= 2 ? 0 : 1);

    for (let i = 0; i < integers.length; i++) {
        if (Math.abs(integers[i] % 2) !== eveness) {
            return integers[i];
        }
    }
}

// Refactor
function findOutlier(integers) {
    const checkEven = (num) => num % 2 === 0;
    return integers.slice(0, 3).filter(checkEven).length > 1
        ? integers.find((num) => num % 2 !== 0)
        : integers.find(checkEven);
}

console.log(findOutlier([0, 2, 1, 4, 6, 8, 10])); //even
console.log(findOutlier([0, 6, 2, 1, 4, 6, 8, 10])); //even
console.log(findOutlier([0, 20, 2, 3, 6, 8, 10])); //even
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); //even

function findNextSmallestNumber(num, array) {
    const sortedArray = [...array.sort((a, b) => b - a)];
    for (let i = 0; i < sortedArray.length; i++) {
        const element = sortedArray[i];
        if (element < num) return element;
    }
    return -1;
}

function nextSmaller(n) {
    const arrayOfDigits = Array.from(String(n), Number);
    const checkedNums = [];
    for (let i = arrayOfDigits.length - 1; i >= 0; i--) {
        const element = arrayOfDigits[i];

        checkedNums.push(element);
        if (element < arrayOfDigits[i - 1]) {
            const pivot = arrayOfDigits[i - 1];

            const nextSmallest = checkedNums.splice(
                checkedNums.indexOf(findNextSmallestNumber(pivot, checkedNums)),
                1
            );
            checkedNums.push(pivot);

            const nextSmallerNum = [
                ...arrayOfDigits.slice(0, i - 1),
                ...nextSmallest,
                ...checkedNums.sort((a, b) => b - a),
            ];

            return nextSmallerNum[0] === 0
                ? -1
                : parseInt(nextSmallerNum.join(''));
        }
    }

    return -1;
}

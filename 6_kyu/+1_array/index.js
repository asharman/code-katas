function upArray(arr) {
    if (arr.find((cur) => cur < 0 || cur > 9) || !arr.length) {
        return null;
    }

    const reversedArray = [...arr].reverse();

    for (let i = 0; i < reversedArray.length; i++) {
        if (!reversedArray[i - 1]) {
            reversedArray[i] = reversedArray[i] < 9 ? reversedArray[i] + 1 : 0;
            console.log(reversedArray[i]);
        } else {
            return reversedArray.reverse();
        }
    }

    return [1, ...reversedArray.reverse()];
}

console.log(upArray([9, 9, 9]));

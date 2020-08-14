function encrypt(text, n) {
    if (!text || n <= 0) {
        return text;
    }

    const encryptedText = text
        .split('')
        .reduce((acc, cur, i, arr) => {
            index =
                i % 2 === 0
                    ? i + Math.floor(arr.length / 2) - Math.ceil(i / 2)
                    : i - Math.ceil(i / 2);

            return (acc[index] = cur), acc;
        }, new Array(text.length))
        .join('');

    return encrypt(encryptedText, n - 1);
}
// 7, 0, 8, 1, 9, 2, 10, 3, 11, 4, 12, 5, 13, 6 = indexes rearranged
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 = indexes
// 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7 = number to subtract by

function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) {
        return encryptedText;
    }

    const decryptedText = encryptedText
        .split('')
        .reduce((acc, cur, i, arr) => {
            index =
                i < Math.floor(arr.length / 2)
                    ? i * 2 + 1
                    : (i - Math.floor(arr.length / 2)) * 2;

            return (acc[index] = cur), acc;
        }, new Array(encryptedText.length))
        .join('');

    return decrypt(decryptedText, n - 1);
}
// 0 -> 1, i * 2 + 1
// 1 -> 3, i * 2 + 1
// 2 -> 5, i * 2 + 1
// 3 -> 7, i * 2 + 1
// 4 -> 9, i * 2 + 1
// 5 -> 11, i * 2 + 1
// 6 -> 13, i * 2 + 1
// 7 -> 0, i - length / 2 * 2
// 8 -> 2, i - length / 2 * 2
// 9 -> 4, i - length / 2 * 2
// 10 -> 6, i - length / 2 * 2
// 11 -> 8, i - length / 2 * 2
// 12 -> 10, i - length / 2 * 2
// 13 -> 12, i - length / 2 * 2

console.log(decrypt(encrypt('This is a test!', 1), 1));

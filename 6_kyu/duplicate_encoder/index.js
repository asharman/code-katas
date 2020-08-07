// First Attempt

function duplicateEncode(word) {
    // Count the letters in an object
    const letterCount = word
        .toLowerCase()
        .split('')
        .reduce((acc, letter) => {
            return acc[letter] ? (acc[letter] += 1) : (acc[letter] = 1), acc;
        }, {});

    // Loop over the word and check if the letter count is more than one
    return word
        .toLowerCase()
        .split('')
        .map((letter) => (letterCount[letter] > 1 ? ')' : '('))
        .join('');
}

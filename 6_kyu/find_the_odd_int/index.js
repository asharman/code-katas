// First attempt

function findOdd(A) {
    const numObj = A.reduce((acc, num) => {
        if (acc[num]) {
            acc[num] += 1;
        } else {
            acc[num] = 1;
        }

        return acc;
    }, {});

    const oddNumber = Object.entries(numObj).filter(
        ([key, value]) => value % 2 !== 0
    );
    return parseInt(oddNumber[0]);
}

// Refactor
// With the refactor we delete the value from our object when it exists already
// This leaves only the odd number in the object and we don't have to loop over another array

function findOdd(A) {
    const numObj = A.reduce((acc, num) => {
        return acc[num] ? delete acc[num] : (acc[num] = 1), acc;
    }, {});

    return Number(Object.keys(numObj)[0]);
}

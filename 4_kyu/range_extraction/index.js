function solution(list) {
    return list
        .reduce((acc, cur, i, arr) => {
            const lastArray = cur - arr[i - 1] === 1 ? acc.pop() : [];
            lastArray.push(cur);
            acc.push(lastArray);
            return acc;
        }, [])
        .map((group) =>
            group.length > 2
                ? `${group[0]}-${group[group.length - 1]}`
                : group.join(',')
        )
        .join(',');

    //Split the list up into arrays of consecutive numbers
    //[1,2,3,5,7,8,9] -> [[1,2,3],[5],[7,8,9]]
    //Map over the the list and convert each array into a string of the first and last element if the length > 1
    //[[1,2,3],[5],[7,8,9]] -> ['1-3', '5', '7-9']
    //Join with comma in between
}

console.log(
    solution([
        -6,
        -3,
        -2,
        -1,
        0,
        1,
        3,
        4,
        5,
        7,
        8,
        9,
        10,
        11,
        14,
        15,
        17,
        18,
        19,
        20,
    ])
);

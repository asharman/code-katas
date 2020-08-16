var moveZeros = function (arr) {
  return arr
    .reduce(
      ([nonZero, zeros], cur) => (
        cur === 0 ? zeros.push(cur) : nonZero.push(cur), [nonZero, zeros]
      ),
      [[], []]
    )
    .flat()
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']))

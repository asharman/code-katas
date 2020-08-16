function validParentheses(parens) {
  const stack = []
  for (let i = 0; i < parens.length; i++) {
    const char = parens[i]

    if (char === '(') {
      stack.push(char)
    } else if (!stack.pop()) {
      return false
    }
  }

  return stack.length === 0
}

console.log(validParentheses(''))

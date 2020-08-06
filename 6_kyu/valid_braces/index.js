// First attempt

// Check if its an opening brace, if it is push it to a stack
// If its a closing brace check what our last open brace was and pop it off the stack
// If the closing brace matches the opening brace we're all good keep going
// Otherwise they don't match and we can abort early with false

function validBraces(braces) {
    const openBraces = ['(', '{', '['];
    const closeBraces = [')', '}', ']'];

    const array = [];
    const chars = braces.split('');

    if (!chars.length) return false;

    for (let i = 0; i < chars.length; i++) {
        const brace = chars[i];

        // Trying to close a pair without opening it first
        if (closeBraces.includes(brace) && !array.length) {
            return false;
        }

        if (openBraces.includes(brace)) array.push(brace);
        if (closeBraces.includes(brace)) {
            const lastOpenedBrace = array.pop();
            switch (brace) {
                case ')':
                    if (lastOpenedBrace !== '(') return false;
                    break;
                case ']':
                    if (lastOpenedBrace !== '[') return false;
                    break;
                case '}':
                    if (lastOpenedBrace !== '{') return false;
                    break;

                default:
                    break;
            }
        }
    }

    // If our stack still has some opening braces left afterwards that means we didn't close them all and should return false
    if (array.length) {
        return false;
    } else {
        return true;
    }
}

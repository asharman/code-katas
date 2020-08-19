function pigIt(str) {
    return str
        .split(' ')
        .map((word) =>
            word.match('[!"#$%&\'()*+,-./:;<=>?@[\\]^_‘{|}~]')
                ? word
                : `${word.slice(1)}${word[0]}ay`
        )
        .join(' ');
}

console.log(pigIt('O tempora o mores !'));

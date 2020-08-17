function cost(mins) {
    const additionalHours = mins > 65 ? Math.ceil((mins - 65) / 30) : 0;
    return 30 + additionalHours * 10;
}

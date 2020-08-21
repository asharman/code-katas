function multiplicationTable(row, col) {
    const table = [];
    for (let i = 1; i <= row; i++) {
        const row = [];
        for (let j = 1; j <= col; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}

multiplicationTable(2, 2);

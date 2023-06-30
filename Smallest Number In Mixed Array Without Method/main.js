function min_number(items) {
    return items.filter(el => typeof el === 'number').reduce((acc, cur) => acc < cur ? acc : cur);
}

console.log(min_number([115, 20, 10, "A", "!", "@", 13, 1, 5, 2, "X", "C", 0]));  // 1
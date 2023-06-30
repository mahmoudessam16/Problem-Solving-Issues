function checkNumber(num, arr) {
    let prev = num - 1;
    let aft = num + 1;
    if (arr.indexOf(prev) === -1 && arr.indexOf(aft) === -1) {
        return false;
    } else {
        return `True => ${prev} | ${num} | ${aft}`;
    }
}


arrayofnumbers = [1, 2, 4, 10, 20, 12];
console.log(checkNumber(11, arrayofnumbers)); // True => "10 | 11 | 12"
console.log(checkNumber(3, arrayofnumbers)); // True => "2 | 3 | 4"
console.log(checkNumber(2, arrayofnumbers)); // False
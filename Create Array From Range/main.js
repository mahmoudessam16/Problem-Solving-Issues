function createArray(num1, num2) {
    let result = [];
    for (let i = num1; i <= num2; i++) {
        if (i === 8) {
            continue;
        }
        result.push(i);
    }
    return result;
}
// Input
console.log(createArray(5, 10));
// Output
// [5, 6, 7, 9, 10]
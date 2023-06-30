function do_sort(names) {
    // Your Code
    let result = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i][0].toLowerCase() === 'a') {
            result.push(names[i]);
        }
    }
    return result.sort((a, b) => a.length - b.length).sort(function (a, b) {
        if (a[0] === a[0].toLocaleLowerCase() && b[0] === b[0].toLocaleLowerCase() ||
            a[0] === a[0].toLocaleUpperCase() && b[0] === b[0].toLocaleUpperCase()) {
            return a.localeCompare(b);
        }
        if (a[0] === a[0].toLocaleLowerCase()) {
            return -1;
        }
        return 1;
    });
}

// Test Cases
console.log((do_sort(["Ameer", "alsayed", "Mahmoud", "Ahmed", "ayman", "Israa", "Anas", "amal", "amr", "aml"])));
// ['amr', 'aml', 'amal', 'ayman', 'alsayed', 'Anas', 'Ameer', 'Ahmed']
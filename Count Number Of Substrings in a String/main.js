function count_sub_strings(sub, string) {
    return string.toLowerCase().indexOf(sub.toLowerCase()) + 1;
}

console.log(count_sub_strings("o", "I Love Elzero Web School"))  // 4
console.log(count_sub_strings("a", "Iam Happy"))  // 2
console.log(count_sub_strings("H", "Iam Happy"))  // 5
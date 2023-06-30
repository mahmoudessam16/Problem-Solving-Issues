function find_missing_letter_in(letters) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let start = alphabets.indexOf(letters[0]);
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] !== alphabets[start + i]) {
            return alphabets[start + i];
        }
    }
    return "No Missing Letter";
}

// Testing Ouput
console.log(find_missing_letter_in("abcdeghi")) // f
console.log(find_missing_letter_in("defgi")) // h
console.log(find_missing_letter_in("xyz")) // No Missing letter
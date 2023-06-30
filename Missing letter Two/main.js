function find_missing_letter_in(letters) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let start = alphabet.indexOf(letters[0]);
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] !== alphabet[start + i]) {
            return alphabet[start + i];
        }
    }
    return "No Missing Letter In Sequence"
}

// Testing Ouput
console.log(find_missing_letter_in("abcdeghi")) // f
console.log(find_missing_letter_in("defgi")) // h
console.log(find_missing_letter_in("xyz")) // No Missing Letter In Sequence
console.log(find_missing_letter_in("abcdefghijkm")) // No Missing Letter In Sequence
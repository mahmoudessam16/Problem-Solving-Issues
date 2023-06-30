function find_position_for(letter) {
    return "abcdefghijklmnopqrstuvwxyz".indexOf(letter.toLowerCase()) + 1;
}

// Testing Ouput
console.log(find_position_for("C")) // 3
console.log(find_position_for("P")) // 16
console.log(find_position_for("A")) // 1
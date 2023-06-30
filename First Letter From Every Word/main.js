// Input And Test
let testword = 'Elzero Web School';
console.log(getFirstLetters(testword)); // "EWS"

function getFirstLetters(str) {
    let result = "";
    if (str.split(" ").length === 1) {
        result = str;
    } else if (str.split(" ").length > 3) {
        result = "The Word Is Too Big"
    } else if (str.split(" ").length <= 3) {
        result = str.split(" ").map(el => el[0].toUpperCase()).join("");
    }
    return result;
}

// Other Tests
console.log(getFirstLetters("Osama")); // "Osama"
console.log(getFirstLetters("Osama Elzero")); // "OE"
console.log(getFirstLetters("I Love PHP And Python")); // "The Word Is Big"
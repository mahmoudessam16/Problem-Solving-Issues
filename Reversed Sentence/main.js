// Solution One
function reverse(sentence) {
    return sentence.split(" ").reduce((acc, curr) => `${curr} ${acc}`);
}

// Solution Two
function reverse(sentence) {
    return sentence.split(" ").reverse().join(" ");
}

// Testing Ouput
console.log(reverse("Elzero Web School Ahmed Mahmoud"))  // "School Web Elzero"
let arr = [1, 10, 15, -2, -5, 0, "Z", "A", 8, -30, 5, "C"];

function getResult(arr) {
    // Your Code
    let allNegatives = arr.filter(el => el < 0).length; 
    let allPositives = arr.filter(el => el > 0).reduce((acc, cur) => cur + acc);
    let allStrings = arr.filter(el => typeof el === 'string').sort().join("");
    return [allPositives, allNegatives, allStrings];
}

console.log(getResult(arr));

// Ouput
// [39, 3, 'ACZ']
// Input
let my_skills = ["HTML", 20, "JS", "Python", ["Flask", "Django"], "MySQL", 10];

function loop(arr) {
    let filteredArr = arr.filter(el => typeof el !== 'number');
    for (let i = 0; i < filteredArr.length; i++) {
        console.log(`-${filteredArr[i]}`);
        if (typeof filteredArr[i] === 'object') {
            for (let j = 0; j < filteredArr[i].length; j++) {
                console.log(`---${filteredArr[i][j]}`);
            }
        }
    }
    return '';
}

console.log(loop(my_skills));

// Output
//  HTML
//  JS
//  Python
// --- Flask
// --- Django
//  MySQL
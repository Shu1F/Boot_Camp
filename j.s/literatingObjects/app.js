const testScores = {
    Alice: 80,
    Bob: 67,
    Charlie: 89,
    David: 91,
    Eva: 72,
    Frank: 77,
    Grace: 83,
    Hannah: 97,
    Isaac: 81,
    Jack: 60
};

// for (let student of Object.keys(testScores)) {
//     console.log(`${student}さんは${testScores[student]}`);
// }

for (let student in testScores) {
    console.log(`${student}さんは${testScores[student]}`);
}
// function sum() {
//     return arguments.reduce((total, num) => total + num);
// }

function sum(...nums) {
    return nums.reduce((total, num) => total + num);
}
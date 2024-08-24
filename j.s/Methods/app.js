// const myMath = {
//     PI: 3.14,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }

//省略形

// const myMath = {
//     PI: 3.14,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }

const cat = {
    name: 'タマ',
    color: 'grey',
    breed: 'アメリカンショートヘア',
    cry() {
        console.log(this);
        console.log(`${this.name}がにゃーと泣きました`);
    }
}

const cry2 = cat.cry;
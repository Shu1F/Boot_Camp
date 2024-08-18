// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count);
// }

const SECRET = 'supersecret';

let guess = '';

while (guess !==SECRET) {
    guess = prompt('秘密のコードを入力してください：');
}
console.log('正解！！');
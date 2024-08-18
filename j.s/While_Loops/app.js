// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count);
// }

// const SECRET = 'supersecret';

// let guess = '';

// while (guess !==SECRET) {
//     guess = prompt('秘密のコードを入力してください：');
// }
// console.log('正解！！');

// let input = prompt('何か入力してください');
// while(true) {
//     input = prompt(input);
//     if (input === 'quit') break;
// }

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

let maximum = parseInt(prompt('数字を入力してください：'));
while (!maximum) {
    maximum = parseInt(prompt('エラーが起きました。有効な数字を入力してください：'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('1つ数字を決めました。数字を当ててみてください：'));
while (guess !== targetNum) {
    if (guess > targetNum) {
        guess = parseInt(prompt('その数字より小さいです！もう一度当ててみてください：'));
    } else {
        guess = parseInt(prompt('その数字より大きいです！もう一度当ててみてください：'));
    }
}

console.log('正解！')
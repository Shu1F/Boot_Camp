// const password = prompt('パスワードを入力してください');

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('素晴らしいパスワードです。');
// } else {
//     console.log('パスワードのフォーマットが無効です。');
// }

// 0-5 無料
// 5-10 子供料金
// 10-65 大人料金
// 65+ 無料

const age = 90;
if (age < 5 || age >= 65) {
    console.log('無料です');
} else if (age < 10) {
    console.log('子供料金です');
} else if (age < 65) {
    console.log('大人料金です');
}
// console.log('条件分岐の前');

// let random = Math.random();
// if (random < 0.5) {
//     console.log('数字は0.5より小さい');
// } else {
//     console.log('数字は0.5以上');
// }
// console.log(random);

// const dayOfWeek = prompt('英語で曜日を入力してください：').toLowerCase();

// if (dayOfWeek === 'Monday') {
//     console.log('月曜は憂鬱');
// } else if (dayOfWeek === 'Saturday') {
//     console.log('土曜日は最高');
// } else if (dayOfWeek === 'Friday') {
//     console.log('仕事が終わってからの華金は最高');
// } else {
//     console.log('はぁ。');
// }

// 0-5 無料
// 5-10 子供料金
// 10-65 大人料金
// 65 over シニア料金

const age = 100;

if (age < 5) {
    console.log('無料です。');
} else if (age < 10){
    console.log('子供料金なので1000円です。');
} else if (age < 65) {
    console.log('大人料金なので2000円です。');
} else {
    console.log('シニア料金なので1000円です。');
}
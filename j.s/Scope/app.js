// let total = 0;
// function collect() {
//     let total = 6;
// }
// console.log(total);
// collect();
// console.log(total);

// let bird = 'アオサギ';

// function birdWatch() {
//     let bird = 'ムクドリ';
// }

// birdWatch();
// console.log(bird);

// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14;
//     let msg = 'hogehoge';
//     console.log(PI);
// }

// console.log(msg);

// for (let i = 0; i < 5; i++) {
//     let msg = 'jjbcuiawfv';
// }

// function bankRobbery() {
//     const heroes = ['スパイダーマン', 'スーパーマン', 'ブラックパンサー'];
//     function help() {
//         for (let hero of heroes) {
//             console.log(`助けて、${hero}!!!`);
//         }
//     }
//     help();
// }

// let x = 'あいうえお';
// function hoge() {
//     console.log(x);
// }
// function moge() {
//     let x = 'かきくけこ';
//     hoge();
// }

// const add = function(x, y) {
//     return x + y;
// }

// function makeRandomFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function() {
//             console.log('おめでとう！！！！！！');
//         }
//     } else {
//         return function() {
//             alert('ウイルスに感染しました！！！！');
//             alert('閉じないで');
//             alert('閉じないで');
//             alert('閉じないで');
//             alert('閉じないで');
//             alert('閉じないで');
//             alert('閉じないで');
//             alert('閉じないで');
//             alert('閉じないで');
//         }
//     }
// }

const mayMath = {
    PI: 3.14,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}

//省略形

const mayMath = {
    PI: 3.14,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}
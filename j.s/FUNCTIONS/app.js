function singSong() {
    console.log('ド');
    console.log('レ');
    console.log('ミ');
}

// singSong();

function greet(firstName, lastName) {
    console.log(`Hi ${firstName} ${lastName[0]}.`);
}

// greet('Shuichi', 'Fujiike');

// repeat('hi', 3);

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}
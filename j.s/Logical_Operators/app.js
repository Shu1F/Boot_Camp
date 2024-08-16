const password = prompt('パスワードを入力してください');

if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log('素晴らしいパスワードです。');
} else {
    console.log('パスワードのフォーマットが無効です。');
}
let command = prompt('コマンドを入力してください(new, list, delete, quit)');
let todos = [];

while (command !== 'quit') {
    if (command === 'new') {
        let newTodo = prompt('新しいTodoを入力してください');
        todos.push(newTodo);
        console.log(`「${newTodo}」を追加しました`);
    } else if (command === 'list') {
        console.log('*****************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*****************');
    } else if (command === 'delete') {
        let index = prompt('削除するインデックスを入力してください');
        let deleted = todos.splice(index, 1);
        console.log(`「${deleted[0]}」を削除しました`);
    }
    command = prompt('コマンドを入力してください(new, list, delete, quit)');
}

console.log('アプリを終了しました');
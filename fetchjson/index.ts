import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number,
    title: string,
    completed: boolean
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const ID = todo.id;
    const Number = todo.title;
    const Completed = todo.completed;

    logTodo(ID, Number, Completed);
});

const logTodo = (ID: number, Number: string, Completed: boolean) => {
    console.log(`
    The console is: ${ID}
    with: ${Number}
    Power: ${Completed}
`)
}



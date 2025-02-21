import { useState } from 'react'

interface Todos {
    id?: number;
    task: string;
    completed: boolean;
}
const TodoList = () => {
    const [todos, setTodos] = useState<Todos[]>([]);
    const addToto = (task: string) => {

        const newTodo: Todos = {
            id: todos.length + 1,
            task,
            completed: false

        }
        setTodos((prevTodos) => [...prevTodos, newTodo])
    }
    return (
        <div>
            <h2>Todo list</h2>
            <button style={{ marginTop: '30px' }} onClick={() => addToto('new todo')}>Add todo list</button>
            <ul style={{ marginTop: '10px' }}>
                {todos?.map((todo, index) => (
                    <li key={index}>{todo.id} {todo.task} {todo.completed}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
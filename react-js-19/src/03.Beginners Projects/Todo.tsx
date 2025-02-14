import { useState } from "react"

interface ITodosProps {
    text: string;
    id: number;
}
export const Todo = () => {
    const [input, setInput] = useState<string>('');
    const [todos, setTodos] = useState<ITodosProps[]>([])

    function generateId() {
        return Math.floor(Math.random() * 10);
    }

    const handleSubmit = () => {
        if (!input.trim()) {
            return
        }
        setTodos((prevTodo) => [
            ...prevTodo,
            { text: input, id: generateId() }
        ]);
        setInput('')
    }

    const handleRemove = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="New todo" />
            <button onClick={handleSubmit}>Submit</button>
            <ul>
                {todos?.map((td) => {
                    return (

                        <li key={td.id}>
                            {td.text}
                            <button onClick={() => handleRemove(td.id)}>Remove</button>

                        </li>
                    )
                })}
            </ul>

        </>
    )
}
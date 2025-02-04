import { useState } from "react"

const TodoList = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState<string[]>([]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }

    }
    const handleChange = (e: any) => {
        setInputValue(e.target.value);
    }
    return (
        <>
            <form onSubmit={handleSubmit} >
                <input style={{ marginTop: '20px' }} type="text" value={inputValue} onChange={handleChange} placeholder="Enter the list of food" />
                <button type='submit'>Submit </button>
            </form>

            <ul>
                {todos?.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;
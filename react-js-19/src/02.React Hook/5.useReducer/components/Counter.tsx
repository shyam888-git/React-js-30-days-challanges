import { useReducer, useState } from "react";
import { countReducer, initialState } from "../counterReducer";

export const Counter = () => {
    const [state, dispatch] = useReducer(countReducer, initialState);
    console.log(state, 'state');
    const [inputValue, setInputValue] = useState(0);

    const handleIncrement = () => {
        dispatch({ type: 'increment' })

    }

    const handleDncrement = () => {

        dispatch({ type: 'decrement' })
    }

    const handleIncrementByAmount = () => {
        dispatch({ type: 'incrementByAmount', payload: Number(inputValue) })
    }

    const handleDecrementByAmount = () => {
        dispatch({ type: "decrementByAmount", payload: Number(inputValue) })
    }
    return (
        <>
            <h2>Count:{state?.count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDncrement}>Decrement</button>

            <div>
                <input type="number" value={inputValue} onChange={(e: any) => setInputValue(e.target.value)} />
                <button onClick={handleIncrementByAmount}>Add</button>
                <button onClick={handleDecrementByAmount}>Substract</button>
            </div>
        </>
    )
}
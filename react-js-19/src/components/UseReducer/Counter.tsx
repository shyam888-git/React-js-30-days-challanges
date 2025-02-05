import { useReducer, useState } from "react"
import { counterReducer, initialState } from "./CounterReducer"

export const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    const increment = () => {
        dispatch({ type: 'increment' });
    }

    const decrement = () => {
        dispatch({ type: 'decrement' });
    }
    const [inputValue, setInputValue] = useState<number>(0);


    const incrementByAmount = () => {
        dispatch({ type: "incrementByAmount", payload: Number(inputValue) })
        setInputValue(0);

    }

    const decrementByAmount = () => {
        dispatch({ type: "decrementByAmount", payload: Number(inputValue) })
        setInputValue(0);
    }


    console.log(inputValue, 'inputValues====>')
    return (
        <>
            <h2>Coutner is :{state.count} </h2>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <br /><br />

            <input type="text" value={inputValue} placeholder="Enter input value" onChange={(e) => setInputValue(Number(e.target.value))} />
            <br />

            <br />
            <button onClick={incrementByAmount}>Increment by amount</button> <br /><br />

            <button onClick={decrementByAmount}>Decrement by amount</button>





        </>
    )
}
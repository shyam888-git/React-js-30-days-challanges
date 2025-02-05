
import { useReducer } from "react"

export const Example1 = () => {

    const initialState = { count: 0 };

    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case "increment":
                return { ...state, count: state.count + 1 };

            case "decrement":
                return { ...state, count: state.count - 1 }

            case "reset":
                return { ...state, count: 0 }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    return (

        <>
            <h2> Count is : {state.count}</h2>

            <button onClick={() => dispatch({ type: 'increment' })}>+</button>

            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>

            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>


        </>
    )
}
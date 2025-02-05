import { useRef, useState } from "react"

export const Example3 = () => {

    const [count, setCount] = useState<number>(0);
    const ref = useRef<number>(0);
    console.log(ref, 'ref=====>')

    const handleIncrement = () => {
        ref.current++
        setCount(count + 1)
    }

    const handleDecrement = () => {
        ref.current++;
        setCount(count - 1);
    }


    return (
        <>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>

            <h2>Count is :{count}</h2>
        </>
    )
}
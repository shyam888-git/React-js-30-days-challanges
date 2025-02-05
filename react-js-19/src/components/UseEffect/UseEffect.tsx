import { useEffect, useState } from "react"

export const UseEffectExample = () => {
    const [inputValue, setInputValue] = useState(0);
    const [something, setSomething] = useState(0);

    useEffect(() => {
        if (inputValue || something > 0) {
            console.log("render effect");
        }
    }, [inputValue, something])
    return (

        <>
            <button type="submit" onClick={() => setInputValue(inputValue + 1)}>Increment</button>
            <button type="submit" onClick={() => setSomething(something + 4)}>incrmented by 4</button>

            <h2>counter :{inputValue}</h2>
            <h3>Counter :{something}</h3>
        </>
    )
}
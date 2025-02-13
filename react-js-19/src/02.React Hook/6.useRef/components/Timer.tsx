import { useEffect, useRef, useState } from "react"

export const Timer = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef<any>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount((prveCount) => prveCount + 1);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };

    }, []);

    return (
        <>
            <h2>Timer :{count} seconds</h2>
            <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
        </>
    )
}
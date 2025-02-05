import { useEffect, useRef, useState } from "react"

export const Example4 = () => {
    const [seconds, setSeconds] = useState<Number>(0);
    const [toggle, setToggle] = useState<boolean>(false);

    const ref = useRef<number | null>(null);

    const handleStopWatch = () => {
        setToggle(!toggle)
    }

    const resetStopWatch = () => {
        setToggle(false);
        setSeconds(0);
    }
    useEffect(() => {
        ref.current = setInterval(() => {
            if (toggle) setSeconds((state: any) => state + 1)
        },1000)
        return () => {
            if (ref.current) {
                clearInterval(ref.current)
            }
        }

    }, [toggle])


    return (
        <>
            <div>{seconds as number}</div>
            <button onClick={handleStopWatch}> {toggle ? "stop" : "start"}</button>
            <button onClick={resetStopWatch}>Reset</button>
        </>


    )
}
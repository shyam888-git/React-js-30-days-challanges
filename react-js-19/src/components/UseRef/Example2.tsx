import { useEffect, useRef } from "react"

export const Example2 = () => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();

        }
    }, [])

    return (
        <>
            <input ref={ref} placeholder="enter here" />
        </>
    )

}
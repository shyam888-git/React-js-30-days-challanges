import { useRef } from "react"

export const Example1 = () => {
    const inputElementRef = useRef<HTMLInputElement>(null);

    const focuseInput = () => {
        if (inputElementRef.current) {
            inputElementRef.current.focus()
        }
    }
    return (
        <>
            <input type="text" ref={inputElementRef} placeholder="Enter here " />
            <button onClick={focuseInput}>Focus button</button>
        </>
    )
}
import { useRef } from "react"

export const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const focuseInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    return (

        <div>
            <input type="text" ref={inputRef} placeholder="Click the button to focus" />
            <button type="button" onClick={focuseInput} >Focus </button>

        </div>
    )
}
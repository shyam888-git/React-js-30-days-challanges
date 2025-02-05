import { useState } from "react"
import { PopupContent } from "./PopupConent";

export const CopyContent = () => {
    const [inputValue, setInputValue] = useState('');
    const [copied, setCopied] = useState(false);

    const handleSubmit = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 10000)


        })

    }
    return (

        <>
            <h3>Copy Content</h3>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="copy the text" />
            <button type="submit" onClick={handleSubmit}>Copy </button>

            <PopupContent copied={copied}/>
        </>
    )
}
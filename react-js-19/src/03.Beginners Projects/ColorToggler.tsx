import { useState } from "react"

export const ColorToggler = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');
    const [textColor, setTextColor] = useState('#1b1b1b');
    const [buttonStyle, setButtonStyle] = useState("white");

    function handleClick() {
        setBackgroundColor(backgroundColor === 'white' ? '#1b1b1b' : "white");
        setTextColor(textColor === '#1b1b1b' ? "#ffa31a" : "#1b1b1b");
        setButtonStyle(backgroundColor === 'white' ? "#1b1b1b" : "white")
    }
    return (
        <>
            <section>
                <button onClick={handleClick}
                    style={{
                        color: textColor,
                        border: `2px solid ${textColor}`,
                    }}
                >{backgroundColor === "#1b1b1b" ? "Black theme" : "white theme"}</button>
                <section>
                    <h1>Welcome to a real world</h1>
                </section>
            </section>
        </>
    )
}
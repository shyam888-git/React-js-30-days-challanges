import { useState } from "react"

export const Switcher = () => {
    const [sw, setSw] = useState(false);
    return (

        <>
            {sw ? <span>light</span> : <span>dark</span>}

            <input type="text" key={sw ? "dark" : "light"} style={{ margin: '50px 0px' }} />
            <button type="submit" onClick={() => setSw((sw) => !sw)}>Switch</button>

        </>
    )
}
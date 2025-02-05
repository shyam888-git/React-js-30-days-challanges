import { useEffect, useState } from "react"

export const Example = () => {
    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem('name');
        return savedName ? JSON.stringify(savedName) : '';
    });

    const handleChange = (event: any) => {
        setName(event.target.value)
    }

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name));
    }, [name]);

    const handleClear = () => {
        setName('');
    }

    return (

        <>
            <h1>Your name :{name}</h1>
            <input
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={handleChange}
            />

            <button type="button" onClick={handleClear}>Clear </button>


        </>
    )
}
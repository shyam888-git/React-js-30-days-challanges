import React from 'react'

const EventHandling = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("button clicked", e.currentTarget);
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('div clicked', e.currentTarget);
    }
    return (
        <div onMouseEnter={handleMouseEnter}>
            <h2>Hello event handling</h2>
            <button onClick={handleClick}>Button Click</button>
        </div>
    )
}

export default EventHandling
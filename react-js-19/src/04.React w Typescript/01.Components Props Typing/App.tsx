import Button from './components/Button'

const App = () => {
    const handleClick = () => {
        console.log("Handle click");
    }
    return (
        <Button onClick={handleClick} label='Click me' disabled={false} />
    )
}

export default App
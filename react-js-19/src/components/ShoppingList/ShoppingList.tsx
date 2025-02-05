import { useState } from "react"

export const ShoppingList = () => {

    const [items, setItems] = useState<{ name: string, quantify: number }[]>([]);
    const [name, setName] = useState('');
    const [quantity, setQuatity] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!name || !quantity) {
            return;
        }

        const nameItems = {
            name,
            quantity: parseInt(quantity, 10)

        }

        setItems((preValue: any) => [...preValue, nameItems]);
        setName("");
        setQuatity("");

    }
    return (
        <>
            <h2>Shopping List</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" name="quantity" value={quantity} onChange={(e) => setQuatity(e.target.value)} />

                <button type="submit">Add</button>
            </form>
            <ul>
                {items?.map((item, index) => (
                    <li key={index}>
                        {item.name} : {item.quantify}
                    </li>

                ))}
            </ul>
        </>
    )
}
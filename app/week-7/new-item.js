"use client";
import { useState } from "react";
export default function NewItem({onAddItem}){
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');
    const [increaseEnabled, setIncreaseEnabled] = useState(true);
    const [decreaseEnabled, setDecreaseEnabled] = useState(false);

    const increment = () => {
        setQuantity(quantity + 1)
        if (decreaseEnabled === false){
                setDecreaseEnabled(!decreaseEnabled)
        }
        if (quantity === 19) {
            setIncreaseEnabled(!increaseEnabled)
        }
    }

    const decrement = () => {
        setQuantity(quantity - 1)
        if (increaseEnabled === false){
                setIncreaseEnabled(!increaseEnabled)
        }
        if (quantity === 2) {
           setDecreaseEnabled(!decreaseEnabled) 
        } 
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const Item = {name, quantity, category};
        onAddItem(Item)
    }
    
    const checkSubmit = (event) => {
        event.preventDefault();
        if (!name.trim()) {
            alert(`You cannot submit without entering a name!`); 
            return
        } else {
            handleSubmit(event)
    }
    }
    
    return (
        <main>
            
                <input type="text" onChange={(event)=> setName(event.target.value)} name={name} placeholder="Enter item name" />
                <div>Quantity: {quantity}</div>
                <div>
                <button onClick={increment} disabled={!increaseEnabled} className="bg-blue-400 hover:bg-yellow-600 disabled:bg-red-500 rounded m-4 p-4">Increase quantity</button>
                </div>
                <div>
                <button onClick={decrement} disabled={!decreaseEnabled} className="bg-blue-400 hover:bg-yellow-600 disabled:bg-red-500 rounded m-4 p-4">Decrease quantity</button>
                </div>
                <div>
                <select value={category} onChange={(event)=> setCategory(event.target.value)}> 
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select></div>
            <form onSubmit={checkSubmit}>    
                <button type="submit">Submit</button>
            </form>
        </main>
    );
}
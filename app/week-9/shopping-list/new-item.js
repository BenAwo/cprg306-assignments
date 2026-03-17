"use client";
import { useState } from "react";
import item from './item';
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
            
                <input type="text" onChange={(event)=> setName(event.target.value)} name={name} className="block mb-2.5 text-sm font-medium text-heading g-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"placeholder="Enter item name" />
                <div>Quantity: {quantity}</div>
                <div>
                <button onClick={increment} disabled={!increaseEnabled} className="bg-blue-400 hover:bg-yellow-600 disabled:bg-red-500 rounded m-4 p-4">Increase quantity</button>
                <button onClick={decrement} disabled={!decreaseEnabled} className="bg-blue-400 hover:bg-yellow-600 disabled:bg-red-500 rounded m-4 p-4">Decrease quantity</button>
                </div>
                <div>
                <select value={category} onChange={(event)=> setCategory(event.target.value)}> 
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select></div>
            <form onSubmit={checkSubmit}>    
                <button type="submit">Submit</button>
            </form>
        </main>
    );
}
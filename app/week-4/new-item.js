"use client";
import { useState } from "react";

export default function NewItem(){
    const [quantity, setQuantity] = useState(1);
    const [increaseEnabled, setIncreaseEnabled] = useState(true);
    const [decreaseEnabled, setDecreaseEnabled] = useState(false);


    const increment = () => {
        setQuantity(quantity + 1)
        if (decreaseEnabled === false){
                setDecreaseEnabled(!decreaseEnabled)
        }
        if (quantity == 19) {
            setIncreaseEnabled(!increaseEnabled)
        }
    }

    const decrement = () => {
        setQuantity(quantity - 1)
        if (increaseEnabled === false){
                setIncreaseEnabled(!increaseEnabled)
        }
        if (quantity == 2) {
           setDecreaseEnabled(!decreaseEnabled) 
        } 
    }
    return (
        <main>
            <div>Quantity: {quantity}</div>
            <div>
            <button onClick={increment} disabled={!increaseEnabled} className="bg-blue-400 disabled:bg-yellow-900 rounded m-4 p-4">Increase quantity</button>
            </div>
            <div>
            <button onClick={decrement} disabled={!decreaseEnabled} className="bg-blue-400 disabled:bg-yellow-900 rounded m-4 p-4">Decrease quantity</button>
            </div>
        </main>
    );
}
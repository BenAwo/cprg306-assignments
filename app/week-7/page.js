"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';


export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItems = (Item) => {
    Item.id = Math.floor(Math.random() * Date.now()).toString(8);
    setItems([...items, Item])
  }
  return (
    <main>
        <NewItem onAddItem={handleAddItems} />  
        <div></div>
        <ItemList initialData={items} />
    </main>
  );
}

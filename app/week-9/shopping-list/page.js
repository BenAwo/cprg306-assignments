"use client";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import Item from "./item"
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import loginCheck from '../page.js';
import Link from "next/link";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectName] = useState("");
  const { user } = useUserAuth();

  const handleSelectItem = (onItemSelect) => {
    const ItemText = onItemSelect.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
    const cleanItem = ItemText.split(",")
    setSelectName(cleanItem[0].trim())
  }

  const handleAddItems = (Item) => {
    Item.id = Math.floor(Math.random() * Date.now()).toString(8);
    setItems([...items, Item])
  }


  return (
    <main>
      <div></div>
        <h1 className="text-lg font-bold">Shopping List</h1>
        {user && (
          <div className="flex gap-6">
            <div className="basis-1/2">
            <NewItem onAddItem={handleAddItems} />  
            <ItemList initialData={items} onItemSelect={handleSelectItem}/>
            </div>
            <div className="basis-1/2">
            <MealIdeas ingredient={selectedItemName} />
            </div>
        </div>)}
        {!user && (
          <p>You need to be logged in to access this content.
          <Link href="../week-9">        Return to Login</Link></p>
        )}
    </main>
  );
}

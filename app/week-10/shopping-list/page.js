"use client";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import Item from "./item"
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from './meal-ideas';
import Link from "next/link";
import {getItems, addItem} from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectName] = useState("");

  const handleSelectItem = (onItemSelect) => {
    const ItemText = onItemSelect.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
    const cleanItem = ItemText.split(",")
    setSelectName(cleanItem[0].trim())
  }

  const handleAddItems = async (Item) => {
    Item.id = await addItem(user.uid, Item);
    setItems([...items, Item])
  }

  async function loadItems() {
    try {
      const fetchedItems = await getItems(user.uid)
      setItems(fetchedItems)
    } catch(error) {
      console.error("Error: ", error)
    }
  }

  useEffect(() => {
    if (user.uid){
      loadItems;
    }
  }, [user.uid]);

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
          <Link href="../week-10">        Return to Login</Link></p>
        )}
    </main>
  );
}

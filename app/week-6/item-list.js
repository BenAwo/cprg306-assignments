"use client";
import { useState, useEffect } from "react";
import Item from './item';
import initialData from './items.json';
export default function ItemList(){
    const [sortBy, setSortBy] = useState('name');
    const [data, setData] = useState(initialData);
    const [groupBy, setGroupBy] = useState(false);
    
    const ItemSort = (sortBy) =>{
        const sortedData = [...initialData].sort((a, b) =>
            a[sortBy].localeCompare(b[sortBy])
        );
        setData(sortedData);
    }
    

    const SortName = () =>{ 
        setSortBy('name')
        ItemSort(sortBy)
        setGroupBy(false)
    }
    const SortCategory = () => {
        setSortBy('category')
        ItemSort(sortBy)
        setGroupBy(false)
    }
    const GroupByCategory = () => {
        const grouped = initialData.reduce((groupedItems, items) => {
            const itemCat = items.category
            if (groupedItems[itemCat] == null) groupedItems[itemCat] = []
            groupedItems[itemCat].push(items)
            return groupedItems
        }, {})
        setData(grouped)
        setGroupBy(true)
        setSortBy('')
    }
    useEffect(() => {
        SortName();
    }, []);

    return(
        <main>
            <div>
                <button onClick={SortName} disabled={sortBy === 'name'} className="bg-blue-400 hover:bg-yellow-600 disabled:bg-red-500 rounded m-4 p-4">Sort by name</button>
                </div>
                <div>
                <button onClick={SortCategory} disabled={sortBy === 'category'} className="bg-blue-400 hover:bg-yellow-600 disabled:bg-red-500 rounded m-4 p-4">Sort by category</button>
                </div>
                <div>
                <button onClick={GroupByCategory} disabled={groupBy === true} className="bg-blue-400 hover:bg-yellow-600 disabled:bg-red-500 rounded m-4 p-4">Group by category</button>
                </div>
            <div>
                 <ul>
    {groupBy
        ? Object.entries(data).map(([category, items]) => (
            <li key={category}>
                <strong>{category}</strong>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.quantity}</p>
                        </li>
                    ))}
                </ul>
            </li>
        ))
        : data.map((item) => (
            <li key={item.id}>
                <p>{item.name}</p>
                <p>{item.quantity}</p>
                <p>{item.category}</p>
            </li>
        ))
    } </ul>
            </div>
        </main>
    );
}
//: {data.map((item) => (
//                    <li key={item.id}>
//                        <p>{item.name}</p>
//                        <p>{item.quantity}</p>
//                        <p>{item.category}</p>
//                    </li>
// <ul onChange={(event)=> sortBy(event.target.value)}>
import Item from './item'

export default function ItemList(){
    const Item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
    };
 
    const Item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
    };
 
    const Item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
    };
 
    const Item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
    };
 
    const Item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
    };
 
    const Item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
    };
 
    const Item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
    };
 
    const Item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
    };
 
    const Item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
    };

    const Item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
    };
 
    const Item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
    };
 
    const Item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
    };
    let items = [Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8, Item9, Item10, Item11, Item12];
    
    return(
      <div>
        {items?.map((data)=>(<div>{data?.name}</div>))}
        </div>
    );
}

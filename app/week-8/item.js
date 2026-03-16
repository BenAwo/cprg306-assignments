export default function Item({name, quantity, category, onSelect}){
    return(
        <ul onClick={onSelect}>
            <li>Name: {name}</li>
            <li>Quantity: {quantity}</li>
            <li>Category: {category}</li>
        </ul>
    );
}


import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function addItem(userId, Item) {
    const docRef = await addDoc(collection(db, "users", userId, "items"), {
        name: Item.name,
        quantity: Item.quantity,
        category: Item.category,
    });
    return(docRef.id)   
};

export async function getItems(userId) {
    const items = []
    const q = query(
        collection(db, "users", userId, "items"),
        where("name", "!=", "")
        );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        items.push({id: doc.id, ...doc.data()});
    });
    return(items);
}
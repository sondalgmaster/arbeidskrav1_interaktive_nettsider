import { useState } from "react";
import AddForm from "./AddForm";

export default function ShoppingList() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
  }

  return (
    <>
      <AddForm onAddItem={addItem} />
      {items.map(item => (
        <p key={item.id}>
          {item.produkt} ({item.antall})
        </p>
      ))}
    </>
  );
}

import ShoppingItem from "./ShoppingItem";

export default function ShoppingList() {
  const items = [
    { id: 1, produkt: "eple", antall: 2, checked: false },
    { id: 2, produkt: "banan", antall: 5, checked: true }
  ];

  return (
    <div>
      {items.map(item => (
        <ShoppingItem key={item.id} item={item} />
      ))}
    </div>
  );
}
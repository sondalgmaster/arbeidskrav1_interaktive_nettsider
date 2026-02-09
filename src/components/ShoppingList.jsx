import ShoppingItem from "./ShoppingItem";

function ShoppingList({ items, onToggle, onUpdateAntall }) {
  return (
    <ul>
      {items.map(item => (
        <ShoppingItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onUpdateAntall={onUpdateAntall}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;

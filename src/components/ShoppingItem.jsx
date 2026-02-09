function ShoppingItem({ item, onToggle, onUpdateAntall }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onToggle(item.id)}
        />
        {item.produkt}
      </label>

      <input
        type="number"
        min="1"
        value={item.antall}
        onChange={e =>
          onUpdateAntall(item.id, Number(e.target.value))
        }
      />
    </li>
  );
}

export default ShoppingItem;

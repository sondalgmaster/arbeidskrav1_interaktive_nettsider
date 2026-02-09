//Chat Log link 1 https://chatgpt.com/share/6989baad-a518-8013-a986-ff4de08e1175 
//Chat log link 2 https://chatgpt.com/share/6989ba97-41e4-8013-a841-b83ace878a92

import { useState } from "react";
import AddForm from "./components/AddForm";
import ShoppingList from "./components/ShoppingList";
import "./style/form.scss";


function App() {
  const [items, setItems] = useState([
    { id: 1, produkt: "Epler", antall: 3, checked: false },
    { id: 2, produkt: "Melk", antall: 1, checked: true }
  ]);

  function addItem(newItem) {
    setItems(prev => [newItem, ...prev]); // NYE ØVERST
  }

  function toggleChecked(id) {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function updateAntall(id, nyttAntall) {
    if (nyttAntall < 1) return;

    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, antall: nyttAntall } : item
      )
    );
  }

  return (
    <main>
      <h1>Handleliste</h1>

      <AddForm onAddItem={addItem} />

      <ShoppingList
        items={items}
        onToggle={toggleChecked}
        onUpdateAntall={updateAntall}
      />
    </main>
  );
}

export default App;
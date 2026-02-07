import { useState } from "react";
import AddForm from "./components/AddForm.jsx";
import "./style/form.scss";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  function addItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main>
      <h1>Handleliste</h1>

      <AddForm onAddItem={addItem} />

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.produkt} ({item.antall})
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;

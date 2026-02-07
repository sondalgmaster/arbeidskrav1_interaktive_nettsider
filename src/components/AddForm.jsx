import { useState } from "react";
import "../style/form.scss";

function AddForm({ onAddItem }) {
  const [produkt, setProdukt] = useState("");
  const [antall, setAntall] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      produkt,
      antall: Number(antall),
      checked: false
    };

    onAddItem(newItem);

    // nullstill skjema
    setProdukt("");
    setAntall(1);
  }

  

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label> Vare
        <input type="text" placeholder="Tomat" value={produkt} onChange={(e) => setProdukt(e.target.value)}/>
      </label>
        
      <label> Antall
        <input type="number" min="1" value={antall} onChange={(e) => setAntall(e.target.value)} />
      </label>

      <button type="submit">Legg til vare</button>
    </form>
    </>
  )
}
export default AddForm
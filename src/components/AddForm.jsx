import { useState } from "react";

function AddForm({ onAddItem }) {
  const [produkt, setProdukt] = useState("");
  const [antall, setAntall] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!produkt.trim() && !antall) {
      setError("Du må fylle ut både vare og antall.");
      return;
    }

    if (!produkt.trim()) {
      setError("Du må skrive inn navn på varen.");
      return;
    }

    if (!antall || antall < 1) {
      setError("Antall må være minst 1.");
      return;
    }

    onAddItem({
      id: Date.now(),
      produkt,
      antall: Number(antall),
      checked: false
    });

    setProdukt("");
    setAntall("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vare
        <input
          type="text"
          value={produkt}
          onChange={e => setProdukt(e.target.value)}
        />
      </label>

      <label>
        Antall
        <input
          type="number"
          min="1"
          value={antall}
          onChange={e => setAntall(e.target.value)}
        />
      </label>

      {error && <p>{error}</p>}

      <button type="submit">Legg til vare</button>
    </form>
  );
}

export default AddForm;

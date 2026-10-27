// src/components/SearchForm.jsx
import { useState } from "react";

export default function SearchForm({ onBuscar }) {
  const [texto, setTexto] = useState("");

  function manejarSubmit(evento) {
    evento.preventDefault();
    onBuscar(texto);
  }

  return (
    <form id="form-busqueda" onSubmit={manejarSubmit}>
      <input
        id="ingrediente"
        type="text"
        placeholder="Ej: chicken, rice..."
        autoComplete="off"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button id="buscar" type="submit">Buscar</button>
    </form>
  );
}
import { useState } from "react";

export default function SearchForm({ buscar }) {
  const [texto, setTexto] = useState("");

  function manejarSubmit(evento) {
    evento.preventDefault();
    buscar(texto);
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
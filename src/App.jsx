import { useState } from 'react'
import { useRef} from 'react'
import {useEffect} from 'react'
import { obtenerComida } from "./api";
import { separarIngredientes, combinarResultados } from "./logic";
import './App.css'

import SearchForm from "./componentes/SearchForm"
import RecipeList from "./componentes/RecipeList"
import StatusMessage from "./componentes/StatusMessage"

function App() {
  const [recetas, setRecetas] = useState([]);
  const [estado, setEstado] = useState("inactivo");
  const [mensajeError, setMensajeError] = useState("");
  const controlador = useRef(null);

  useEffect(() => {
    return () => controlador.current?.abort();
  }, []);

  async function buscar(texto){
    const ingredientes = separarIngredientes(texto);

    if(ingredientes.length === 0) return;

    //Cancelamos la busqueda anterior y creamos el controlador de esta, como la anterior mision

    controlador.current?.abort();
    const miControlador = new AbortController();
    controlador.current = miControlador;

    setEstado("cargando");
    setRecetas([]);

    try{
      const listas = await Promise.all(
        ingredientes.map((ing) => obtenerComida(ing, miControlador.signal))
      );

      setRecetas(combinarResultados(listas));
      setEstado("ok");
    }catch (error){
      if(error.name === "AbortError") return;

      setMensajeError("No se pudieron cargar las recetas. Intentalo de nuevo");
      setEstado("error");
    }
  }

  const estadoVisible = estado === "ok" && recetas.length === 0 ? "vacio": estado;
  

  return (
    <>
      <header className="header">
        <h1>¿Que cocino hoy?</h1>
        <p>Dime que tienes en la nevera y te digo que cocinar</p>
      </header>

      <main className="main">
        <SearchForm buscar={buscar} />
        <StatusMessage estado={estadoVisible} mensaje={mensajeError} />
        <RecipeList recetas={recetas} />
      </main>
    </>
  )
}

export default App

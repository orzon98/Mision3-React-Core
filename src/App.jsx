import useBuscarRecetas from './hooks/useBuscarRecetas'
import useLocalStorage from './hooks/useLocalStorage'
import './App.css'

import SearchForm from "./componentes/SearchForm"
import RecipeList from "./componentes/RecipeList"
import StatusMessage from "./componentes/StatusMessage"

function App() {
  const {recetas, estadoVisible, mensajeError, buscar} = useBuscarRecetas();
  const [favoritos, setFavoritos] = useLocalStorage("favoritas", []);

  function toggleFavorito(receta) {
    setFavoritos((actuales) =>
      actuales.some((f) => f.id === receta.id)
        ? actuales.filter((f) => f.id !== receta.id)
        : [...actuales, { id: receta.id, nombre: receta.nombre, imagen: receta.imagen }]
    );
  }

  return (
    <>
      <header className="header">
        <h1>¿Que cocino hoy?</h1>
        <p>Dime que tienes en la nevera y te digo que cocinar</p>
      </header>

      <main className="main">
        <SearchForm buscar={buscar} />
        <StatusMessage estado={estadoVisible} mensaje={mensajeError} />
        <RecipeList recetas={recetas} favoritos={favoritos} onToggleFavorito={toggleFavorito} />

        {favoritos.length > 0 && (
          <>
            <h2 className="titulo-favoritos">Mis favoritos</h2>
            <RecipeList recetas={favoritos} favoritos={favoritos} onToggleFavorito={toggleFavorito} />
          </>
        )}
      </main>
    </>
  )
}

export default App

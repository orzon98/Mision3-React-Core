import useBuscarRecetas from './hooks/useBuscarRecetas.js'
import './App.css'

import SearchForm from "./componentes/SearchForm"
import RecipeList from "./componentes/RecipeList"
import StatusMessage from "./componentes/StatusMessage"

function App() {
  
  const {recetas, estadoVisible, mensajeError, buscar} = useBuscarRecetas();

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

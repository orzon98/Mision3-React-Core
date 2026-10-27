import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import SearchForm from "./componentes/SearchForm"
import RecipeList from "./componentes/RecipeList"
import StatusMessage from "./componentes/StatusMessage"

const prueba = [
  { id: "1", nombre: "Receta A", imagen: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg"},
  { id: "2", nombre: "Receta B", imagen: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg"},
  { id: "3", nombre: "Receta C", imagen: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg"},
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="header">
        <h1>¿Que cocino hoy?</h1>
        <p>Dime que tienes en la nevera y te digo que cocinar</p>
      </header>

      <main className="main">
        <SearchForm onBuscar={(texto) => console.log("buscar:", texto)} />

        <StatusMessage estado="cargando" />
        <StatusMessage estado="error" mensaje="No se pudieron cargar las recetas." />
        <StatusMessage estado="vacio" />
        <StatusMessage estado="ok" />

        <RecipeList recetas={prueba} />
      </main>
    </>
  )
}

export default App

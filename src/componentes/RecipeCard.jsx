export default function RecipeCard({receta}) {
    return(
        <article class="card">
          <img src={receta.imagen} alt={receta.nombre} />
          <h3>{receta.nombre}</h3>
        </article>  
    )
}
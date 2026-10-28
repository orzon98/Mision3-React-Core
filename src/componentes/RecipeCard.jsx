export default function RecipeCard({receta}) {
    return(
        <article className="card">
          <img src={receta.imagen} alt={receta.nombre} />
          <h3>{receta.nombre}</h3>
        </article>  
    )
}
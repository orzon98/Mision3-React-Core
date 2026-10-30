export default function RecipeCard({receta, esFavorita, onToggleFavorito}) {
    return(
        <article className="card">
           <button className="favorito" onClick={()=>onToggleFavorito(receta)} aria-label={esFavorita ? "Quitar de favoritos" : "Añadir a favoritos"}>
            {esFavorita ? "★" : "☆"}
            </button> 
           <img src={receta.imagen} alt={receta.nombre} />
           <h3>{receta.nombre}</h3>
        </article>  
    )
}
import RecipeCard from "./RecipeCard"

export default function RecipeList({recetas, favoritos, onToggleFavorito}){
    return(
        <section className="resultados">
            {recetas.map((receta) => (
                <RecipeCard key={receta.id} receta={receta} esFavorita={favoritos.some((f) => f.id === receta.id)} onToggleFavorito={onToggleFavorito}/>
            ))}
        </section>
    );
}
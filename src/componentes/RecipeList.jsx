import RecipeCard from "./RecipeCard"

export default function RecipeList({recetas}){
    return(
        <section id="resultados">
            {recetas.map((receta) => (
                <RecipeCard key={receta.id} receta={receta}/>
            ))}
        </section>
    );
}
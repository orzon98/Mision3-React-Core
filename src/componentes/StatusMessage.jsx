export default function StatusMessage({estado, mensaje}){
    if (estado === "cargando"){
        return (
            <p className="state">Cargando recetas...</p>
        )
    }

    if(estado === "error"){
        return(
            <p className="state state--error">{mensaje}</p>
        )
    }

    if(estado === "vacio"){
        return(
            <p className="state">No hay recetas con estos ingredientes</p>
        )
    }
    return null;
}
import {useState, useEffect} from 'react'

export default function useLocalStorage(clave, valorInicial){
    const [valor, setValor] = useState(() => {
        try{
            const guardado = localStorage.getItem(clave);
            return guardado !== null ? JSON.parse(guardado) : valorInicial;
        }catch{
            return valorInicial;
        }
    });

    useEffect(() => {
        try{
            localStorage.setItem(clave, JSON.stringify(valor));
        }catch{
            //si falla el guardado, la pagina sigue funcionando
        }
        
    }, [clave, valor]);

    return [valor, setValor];
}
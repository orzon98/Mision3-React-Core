# Misión 3 - Programación web

Reconstruye (o reinventa) tu app de la misión anterior en React 19: componentes, props, estado y efectos. La UI debe reaccionar al estado, no al revés.

En esta mision hemos tenido que cambiar la mision 2 a react usando componentes, y estados. la aplicacion sigue consumiendo la misma API pública de [TheMealDB](https://www.themealdb.com/api.php) para sugerir recetas a partir de ingredientes.

El usuario escribe varios ingredientes separados por comas y la app muestra las recetas que los contienen, ordenadas de más a menos coincidencias.

## Uso de IA

Dos prompts reales que me ayudaron a entender el funcionamiento de algunas funciones.

- *"en la anterior practica use esto [controlador?.abort()...], porque esta vez hay meter current."*
Entonces la ia me dijo que `AbortController` no puede ser una variable normal, porque se redeclara en cada render y se perdería la busqueda anterior. Por eso se guarda con `useRef` que lo conserva entre renders sin provocar un repintado y se lee y escribe con `current`.
- *"una de las cosas que me ha dicho la correccion es que añada un hook personalizado para quitar carga en el app.jsx, lo que he planteado es meter toda la logica en el hook pero me he perdido un poco, porque no se si tiene que pintar ya la web"* -> solo tenia que hacer un return con los valores que necesitaba App.jsx para pintar la app.

## Autopsia

- **Estado mínimo:** guardo solo las recetas, el estado de la búsqueda y el mensaje de error. El estado "vacío" no lo guardo, lo derivo: es vacío si la búsqueda ha ido bien y no hay recetas. Descarté guardarlo como un estado más porque habría que mantenerlo sincronizado a mano con la lista de recetas.
- **Buscar sin `useEffect`:** la búsqueda se lanza al enviar el formulario, así que va en un manejador de evento. Descarté un efecto que se dispare al cambiar el texto, porque haría peticiones mientras el usuario escribe y complicaría la cancelación.
- **`useRef` para el `AbortController`:** en la práctica anterior era una variable de módulo, pero en un componente se perdería en cada render. Descarté `useState` porque cada cambio repintaría la página sin que la pantalla dependa de ese valor.
- **`useEffect` solo para el cleanup:** cancela la petición pendiente si el componente se desmonta.

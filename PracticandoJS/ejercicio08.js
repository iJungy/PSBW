// Buscar y filtrar información
// seccion con el campo de busqueda
const seccionBuscar = document.createElement("section");
seccionBuscar.style.margin = "20px 40px";

const tituloBuscar = document.createElement("h2");
tituloBuscar.textContent = "Buscar tecnología";

const inputBuscar = document.createElement("input");
inputBuscar.type = "text";
inputBuscar.placeholder = "Escribe un nombre, ej. Java";

const mensajeBusqueda = document.createElement("p");
mensajeBusqueda.style.color = "#c0392b";

seccionBuscar.appendChild(tituloBuscar);
seccionBuscar.appendChild(inputBuscar);
seccionBuscar.appendChild(mensajeBusqueda);
document.body.appendChild(seccionBuscar);

// dibuja en pantalla SOLO las tecnologias del arreglo que reciba
function mostrarTecnologias(arreglo) {
    contenedorTarjetas.textContent = "";   // vacia el contenedor (borra las tarjetas actuales)

    for (let i = 0; i < arreglo.length; i++) {
        contenedorTarjetas.appendChild(crearTarjeta(arreglo[i]));
    }
}

// Filtra segun lo que haya escrito el usuario
function filtrarTecnologias() {
    // minusculas para que "java", "JAVA" y "Java" den el mismo resultado
    const busqueda = inputBuscar.value.trim().toLowerCase();

    const resultados = tecnologias.filter(function (tecnologia) {
        return tecnologia.nombre.toLowerCase().includes(busqueda);
    });

    mostrarTecnologias(resultados);

    if (resultados.length === 0) {
        mensajeBusqueda.textContent = "No se encontraron tecnologías con ese nombre.";
    } else {
        mensajeBusqueda.textContent = "";
    }
}

// El evento "input" se dispara cada vez que cambia el texto del campo
inputBuscar.addEventListener("input", filtrarTecnologias);

// Si se agrega una tecnologia nueva, volvemos a aplicar el filtro.
// Este listener se registra DESPUÉS del 07, así que corre después de él.
formulario.addEventListener("submit", filtrarTecnologias);
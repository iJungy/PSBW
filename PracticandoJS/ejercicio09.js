//Estado y LocalStorage
const CLAVE_STORAGE = "tecnologias";

// copia del estado inicial
//    Este archivo corre al cargar la pagina, antes de que el usuario agregue algo asi que "tecnologias" todavia tiene solo las 5 originales.
const tecnologiasIniciales = tecnologias.slice();

// guardar: convierte el arreglo a texto JSON y lo guarda en el navegador
function guardarTecnologias() {
    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tecnologias));
}

// cargar: si hay datos guardados, los recupera y reconstruye la interfaz
function cargarTecnologias() {
    const guardado = localStorage.getItem(CLAVE_STORAGE);   // null si no hay nada

    if (guardado === null) {
        return;   // primera visita: dejamos las 5 tecnologias iniciales
    }

    try {
        const recuperado = JSON.parse(guardado);   // de texto JSON a arreglo
        if (Array.isArray(recuperado)) {
            tecnologias = recuperado;                // reemplaza el arreglo actual
            mostrarTecnologias(tecnologias);         // reconstruye las tarjetas
        }
    } catch (error) {
        // si el texto guardado estuviera dañado, ignoramos y seguimos con lo inicial
        localStorage.removeItem(CLAVE_STORAGE);
    }
}

// seccion con el boton "Borrar datos guardados"
const seccionDatos = document.createElement("section");
seccionDatos.style.margin = "20px 40px";

const tituloDatos = document.createElement("h2");
tituloDatos.textContent = "Datos guardados";

const btnBorrarDatos = document.createElement("button");
btnBorrarDatos.textContent = "Borrar datos guardados";

const mensajeDatos = document.createElement("p");
mensajeDatos.style.color = "#27ae60";

seccionDatos.appendChild(tituloDatos);
seccionDatos.appendChild(btnBorrarDatos);
seccionDatos.appendChild(mensajeDatos);
document.body.appendChild(seccionDatos);

// borrar: elimina lo guardado y regresa al estado inicial
function borrarDatosGuardados() {
    localStorage.removeItem(CLAVE_STORAGE);

    tecnologias = tecnologiasIniciales.slice();   // volvemos a las 5 originales
    inputBuscar.value = "";                       // limpiamos el buscador
    mensajeBusqueda.textContent = "";
    mostrarTecnologias(tecnologias);

    mensajeDatos.textContent = "Datos borrados. Se restauraron las tecnologías iniciales.";
}

// al agregar una tecnologia: ejercicio07.js ya actualizo el arreglo y las tarjetas
// este listener que corre despues guarda el arreglo actualizado.
formulario.addEventListener("submit", guardarTecnologias);

btnBorrarDatos.addEventListener("click", borrarDatosGuardados);

// al cargar la pagina: revisamos si hay datos guardados
cargarTecnologias();
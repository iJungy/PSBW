// formulario dinámico
// seccion y formulario creados con JS
const seccionFormulario = document.createElement("section");
seccionFormulario.style.margin = "20px 40px";

const tituloFormulario = document.createElement("h2");
tituloFormulario.textContent = "Registrar una tecnología";

const formulario = document.createElement("form");

// crea una etiqueta + un control y los agrupa en un div
function crearCampo(textoEtiqueta, control, id) {
    const grupo = document.createElement("div");
    grupo.style.marginBottom = "10px";

    const etiqueta = document.createElement("label");
    etiqueta.textContent = textoEtiqueta;
    etiqueta.htmlFor = id;          // conecta la etiqueta con el control
    etiqueta.style.display = "block";

    control.id = id;

    grupo.appendChild(etiqueta);
    grupo.appendChild(control);
    return grupo;
}

// nombre
const inputNombre = document.createElement("input");
inputNombre.type = "text";
inputNombre.placeholder = "Ej. React";

// descripcion
const inputDescripcion = document.createElement("textarea");
inputDescripcion.rows = 3;
inputDescripcion.placeholder = "¿Para qué sirve?";

// tipo (lista desplegable)
const selectTipo = document.createElement("select");
const tiposDisponibles = ["", "Frontend", "Backend", "Lenguaje", "Herramienta", "Base de datos"];

for (let i = 0; i < tiposDisponibles.length; i++) {
    const opcion = document.createElement("option");
    opcion.value = tiposDisponibles[i];
    opcion.textContent = tiposDisponibles[i] === "" ? "-- Selecciona un tipo --" : tiposDisponibles[i];
    selectTipo.appendChild(opcion);
}

// boton de envio
const btnAgregarTecnologia = document.createElement("button");
btnAgregarTecnologia.type = "submit";
btnAgregarTecnologia.textContent = "Agregar tecnología";

// parrafo para mostrar mensajes de error o exito
const mensajeFormulario = document.createElement("p");

// formulario
formulario.appendChild(crearCampo("Nombre:", inputNombre, "campo-nombre"));
formulario.appendChild(crearCampo("Descripción:", inputDescripcion, "campo-descripcion"));
formulario.appendChild(crearCampo("Tipo:", selectTipo, "campo-tipo"));
formulario.appendChild(btnAgregarTecnologia);

seccionFormulario.appendChild(tituloFormulario);
seccionFormulario.appendChild(formulario);
seccionFormulario.appendChild(mensajeFormulario);
document.body.appendChild(seccionFormulario);

// mostrar mensajes
function mostrarMensajeFormulario(texto, esError) {
    mensajeFormulario.textContent = texto;
    mensajeFormulario.style.color = esError ? "#c0392b" : "#27ae60";
}

// que pasa cuando se envia el formulario
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombreIngresado = inputNombre.value.trim();
    const descripcionIngresada = inputDescripcion.value.trim();
    const tipoIngresado = selectTipo.value;

    // validacion: juntamos los campos que faltan
    const faltantes = [];
    if (nombreIngresado === "") faltantes.push("nombre");
    if (descripcionIngresada === "") faltantes.push("descripcion");
    if (tipoIngresado === "") faltantes.push("tipo");

    if (faltantes.length > 0) {
        mostrarMensajeFormulario("Falta completar: " + faltantes.join(", ") + ".", true);
        return;   // no seguimos: no se agrega nada
    }

    // creamos el objeto, lo guardamos y lo mostramos
    const nuevaTecnologia = {
        nombre: nombreIngresado,
        descripcion: descripcionIngresada,
        tipo: tipoIngresado
    };

    tecnologias.push(nuevaTecnologia);
    contenedorTarjetas.appendChild(crearTarjeta(nuevaTecnologia));

    mostrarMensajeFormulario("Tecnología \"" + nuevaTecnologia.nombre + "\" agregada.", false);
    formulario.reset();       // vacia los campos
    inputNombre.focus();      // regresa el cursor al primer campo
});
//  Eventos e interaccion

// Una clase CSS creada desde JS (para el botón que cambia la clase)
const estiloPanel = document.createElement("style");
estiloPanel.textContent =
    ".destacado { background-color: #f1c40f; color: #2c3e50; " +
    "font-weight: bold; padding: 10px; border-radius: 8px; }";
document.head.appendChild(estiloPanel);

// seccion Panel interactivo en el body, fuera de app
const seccionPanel = document.createElement("section");
seccionPanel.style.margin = "20px 40px";

const tituloPanel = document.createElement("h2");
tituloPanel.textContent = "Panel interactivo";

// botones del panel
const btnMostrarOcultar = document.createElement("button");
btnMostrarOcultar.textContent = "Ocultar sección";

const btnCambiarTexto = document.createElement("button");
btnCambiarTexto.textContent = "Cambiar texto";

const btnCambiarClase = document.createElement("button");
btnCambiarClase.textContent = "Cambiar clase";

btnCambiarTexto.style.marginLeft = "10px";
btnCambiarClase.style.marginLeft = "10px";

// elemento que sera afectado por los botones
const textoPanel = document.createElement("p");
textoPanel.textContent = "Este es el texto original del panel.";

// seccion que se oculta y se muestra
const seccionOculta = document.createElement("div");
seccionOculta.textContent = "Soy una sección que puedes ocultar y mostrar.";
seccionOculta.style.border = "1px dashed #7f8c8d";
seccionOculta.style.padding = "10px";
seccionOculta.style.marginBottom = "10px";

// caja para el evento que NO es click (mouseover / mouseout)
const cajaHover = document.createElement("div");
cajaHover.textContent = "Pasa el mouse sobre esta caja";
cajaHover.style.border = "2px solid #2c3e50";
cajaHover.style.padding = "20px";
cajaHover.style.marginTop = "10px";
cajaHover.style.textAlign = "center";

seccionPanel.appendChild(tituloPanel);
seccionPanel.appendChild(btnMostrarOcultar);
seccionPanel.appendChild(btnCambiarTexto);
seccionPanel.appendChild(btnCambiarClase);
seccionPanel.appendChild(textoPanel);
seccionPanel.appendChild(seccionOculta);
seccionPanel.appendChild(cajaHover);
document.body.appendChild(seccionPanel);

// boton 1: mostrar u ocultar una seccion
function mostrarOcultar() {
    if (seccionOculta.style.display === "none") {
        seccionOculta.style.display = "block";
        btnMostrarOcultar.textContent = "Ocultar sección";
    } else {
        seccionOculta.style.display = "none";
        btnMostrarOcultar.textContent = "Mostrar sección";
    }
}

// boton 2: cambiar un texto (va rotando entre varios mensajes)
const mensajes = [
    "Este es el texto original del panel.",
    "¡El texto cambió con JavaScript!",
    "Otro mensaje distinto para practicar eventos."
];
let indiceMensaje = 0;

function cambiarTexto() {
    indiceMensaje = (indiceMensaje + 1) % mensajes.length;  // 0,1,2,0,1,2...
    textoPanel.textContent = mensajes[indiceMensaje];
}

// boton 3: cambiar una clase (la agrega si no está, la quita si está)
function cambiarClase() {
    textoPanel.classList.toggle("destacado");
}

btnMostrarOcultar.addEventListener("click", mostrarOcultar);
btnCambiarTexto.addEventListener("click", cambiarTexto);
btnCambiarClase.addEventListener("click", cambiarClase);

// evento distinto de click: mouseover y mouseout
// mouseover: se ejecuta cuando el puntero ENTRA a la caja
cajaHover.addEventListener("mouseover", function () {
    cajaHover.style.backgroundColor = "#2ecc71";
    cajaHover.textContent = "¡El mouse está encima!";
});

// mouseout: se ejecuta cuando el puntero SALE de la caja
cajaHover.addEventListener("mouseout", function () {
    cajaHover.style.backgroundColor = "";
    cajaHover.textContent = "Pasa el mouse sobre esta caja";
});
//Crear una colección de elementos desde datos
// Arreglo de objetos: cada objeto es una tecnología web
let tecnologias = [
    {
        nombre: "HTML",
        descripcion: "Lenguaje de marcado que define la estructura de una página web.",
        tipo: "Frontend"
    },
    {
        nombre: "CSS",
        descripcion: "Lenguaje de estilos que controla el aspecto visual de la página.",
        tipo: "Frontend"
    },
    {
        nombre: "JavaScript",
        descripcion: "Lenguaje de programación que da interactividad a las páginas.",
        tipo: "Lenguaje"
    },
    {
        nombre: "Node.js",
        descripcion: "Entorno que permite ejecutar JavaScript fuera del navegador.",
        tipo: "Backend"
    },
    {
        nombre: "Git",
        descripcion: "Sistema de control de versiones para llevar el historial del código.",
        tipo: "Herramienta"
    }
];

// forma general que tendra todas las tarjetas
const contenedorTarjetas = document.createElement("div");
contenedorTarjetas.id = "contenedor-tarjetas";
contenedorTarjetas.style.display = "flex";
contenedorTarjetas.style.flexDirection = "column";

// crea UNA tarjeta a partir de un objeto
function crearTarjeta(tecnologia) {
    const tarjeta = document.createElement("div");
    tarjeta.style.border = "2px solid #2c3e50";
    tarjeta.style.borderRadius = "8px";
    tarjeta.style.padding = "15px";

    const nombre = document.createElement("h3");
    nombre.textContent = tecnologia.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = tecnologia.descripcion;

    const tipo = document.createElement("small");
    tipo.textContent = "Tipo: " + tecnologia.tipo;

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(tipo);

    return tarjeta;
}

// Recorremos el arreglo y generamos una tarjeta por cada objeto
for (let i = 0; i < tecnologias.length; i++) {
    const tarjeta = crearTarjeta(tecnologias[i]);
    contenedorTarjetas.appendChild(tarjeta);
}

// Agregamos el contenedor a la página
document.getElementById("app").appendChild(contenedorTarjetas);
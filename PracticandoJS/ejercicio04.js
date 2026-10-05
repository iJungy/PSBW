// El DOM tambien se puede reorganizar
//   titulo, subtitulo, parrafo1, parrafo2, lista
//   contenedorTarjetas
const title = document.querySelector("h1");
const subtitle = document.querySelector("h2");
const list = document.querySelector("ul");
const parrafos = document.querySelectorAll("p");
const parrafo1 = parrafos[0];
const parrafo2 = parrafos[1];
const container = document.getElementById("contenedor-tarjetas");

// Barra de botones
// se crea un div pq si se pone con app, entonces va a mover todo el contenido
const barraReorganizar = document.createElement("div");
barraReorganizar.style.margin = "20px 40px";
barraReorganizar.style.display = "flex";
barraReorganizar.style.gap = "10px";

const btnReorganizar = document.createElement("button");
btnReorganizar.textContent = "Reorganizar página";

const btnRestaurar = document.createElement("button");
btnRestaurar.textContent = "Restaurar orden";

barraReorganizar.appendChild(btnReorganizar);
barraReorganizar.appendChild(btnRestaurar);

// la ponemos arriba de todo
document.body.insertBefore(barraReorganizar, app);

// Contenedores DIV → Título → Lista → Descripción
function reorganizarPagina() {
    // appendChild sobre un nodo que ya existe lo mueve
    app.appendChild(container);
    app.appendChild(title);
    app.appendChild(subtitle);   // el subtitulo acompaña al titulo
    app.appendChild(list);
    app.appendChild(parrafo1);    // la descripcion son los dos parrafos
    app.appendChild(parrafo2);
}

// Titulo → Descripcion → Lista → Contenedores DIV
function restaurarOrden() {
    app.appendChild(title);
    app.appendChild(subtitle);
    app.appendChild(parrafo1);
    app.appendChild(parrafo2);
    app.appendChild(list);
    app.appendChild(container);
}

// conectamos cada boton con su funcion
btnReorganizar.addEventListener("click", reorganizarPagina);
btnRestaurar.addEventListener("click", restaurarOrden);
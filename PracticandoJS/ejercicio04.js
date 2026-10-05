// El DOM tambien se puede reorganizar
//   titulo, subtitulo, parrafo1, parrafo2, lista  -> ejercicio01.js
//   contenedorTarjetas                            -> ejercicio03.js

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
    app.appendChild(contenedorTarjetas);
    app.appendChild(titulo);
    app.appendChild(subtitulo);   // el subtitulo acompaña al titulo
    app.appendChild(lista);
    app.appendChild(parrafo1);    // la descripcion son los dos parrafos
    app.appendChild(parrafo2);
}

// Titulo → Descripcion → Lista → Contenedores DIV
function restaurarOrden() {
    app.appendChild(titulo);
    app.appendChild(subtitulo);
    app.appendChild(parrafo1);
    app.appendChild(parrafo2);
    app.appendChild(lista);
    app.appendChild(contenedorTarjetas);
}

// conectamos cada boton con su funcion
btnReorganizar.addEventListener("click", reorganizarPagina);
btnRestaurar.addEventListener("click", restaurarOrden);
//Agregar y eliminar elementos

//se pone fuera de body para que no pueda elminar, mover o cambiar algo
const seccionLista = document.createElement("section");
seccionLista.style.margin = "20px 40px";

const tituloLista = document.createElement("h2");
tituloLista.textContent = "Lista dinámica";

const btnAgregar = document.createElement("button");
btnAgregar.textContent = "Agregar elemento";

const btnEliminar = document.createElement("button");
btnEliminar.textContent = "Eliminar último elemento";
btnEliminar.style.marginLeft = "10px";

// parrafo donde mostraremos mensajes
const mensajeLista = document.createElement("p");
mensajeLista.style.color = "#c0392b";

// lista que crecerá y caso contrario tambien
const listaElementos = document.createElement("ul");

seccionLista.appendChild(tituloLista);
seccionLista.appendChild(btnAgregar);
seccionLista.appendChild(btnEliminar);
seccionLista.appendChild(mensajeLista);
seccionLista.appendChild(listaElementos);
document.body.appendChild(seccionLista);

// crea un <li> numerado
function agregarElemento() {
    // Si hay 3 <li>, el siguiente es el número 4
    const numero = listaElementos.children.length + 1;

    const nuevo = document.createElement("li");
    nuevo.textContent = "Elemento " + numero;
    listaElementos.appendChild(nuevo);

    mensajeLista.textContent = "";   // limpiamos cualquier mensaje anterior
}

// quita el ultimo <li>, cuidando el caso de lista vacia
function eliminarUltimoElemento() {
    const ultimo = listaElementos.lastElementChild;   // null si no hay hijos

    if (ultimo === null) {
        mensajeLista.textContent = "La lista está vacía: no hay elementos que eliminar.";
        return;   // salimos de la funcion para no causar un error
    }

    listaElementos.removeChild(ultimo);
    mensajeLista.textContent = "";
}

// Conectamos los botones con las funciones
btnAgregar.addEventListener("click", agregarElemento);
btnEliminar.addEventListener("click", eliminarUltimoElemento);
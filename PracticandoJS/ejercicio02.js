//tenemos que modificar los elementos ya existentes

//modficar el titutlo 

const ti = document.querySelector("h1");

ti.textContent = "Cambiando el titulo por medio de DOM";

ti.id = "titulosecundario";

const textocompleto = document.querySelectorAll("p");

textocompleto.forEach(p => {
    p.classList.add("resaltado");
});

//modificar 3 elementos mediante javascript
ti.style.color = "red";
ti.style.alignContent = "center";
ti.style.fontSize = "40px";


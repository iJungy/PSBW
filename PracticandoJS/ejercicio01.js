// tenemos que tener el contenedor
const app = document.getElementById("app");

//tenemos que crear los elementos con javaScript
const titulo = document.createElement("h1");
const subtitulo = document.createElement("h2");
const text1 = document.createElement("p");
const text2 = document.createElement("p");
const lista = document.createElement("ul");


// ahora tenemos que llenar el contexto de los elementos que creamos

titulo.textContent = "Practicando JavaScript";
subtitulo.textContent = "Manipulando el DOM";
text1.textContent = "I wanna be a billonaire so fucking bad, buy all of the things I never had";
text2.textContent = "I wanna be on the cover of Forbes magazine, smilin' next to Oprah and the Queen";

//tenemos que crear los elementos de la lista
const cantantes = ["Beyonce", "Bruno Mars", "Taylor Swift", "The Weeknd", "Rihanna"];

/*cantantes.forEach(cantante => {
    const li = document.createElement("li");

    li.textContent = cantantes[cantante];
    lista.appendChild(li);
});*/

for (let i = 0; i < cantantes.length; i++) {
    const li = document.createElement("li");

    li.textContent = cantantes[i];
    lista.appendChild(li);
}

app.appendChild(titulo);
app.appendChild(subtitulo);
app.appendChild(text1);
app.appendChild(text2);
app.appendChild(lista);



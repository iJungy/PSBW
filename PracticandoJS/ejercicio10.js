// Formularios y AJAX (API de GitHub)

//crear el formulario con JavaScript
const seccionGithub = document.createElement("section");
seccionGithub.style.margin = "20px 40px";

const tituloGithub = document.createElement("h2");
tituloGithub.textContent = "Buscar usuario de GitHub";

const formularioGithub = document.createElement("form");

const inputUsuario = document.createElement("input");
inputUsuario.type = "text";
inputUsuario.placeholder = "Ej. octocat";

const btnBuscarUsuario = document.createElement("button");
btnBuscarUsuario.type = "submit";
btnBuscarUsuario.textContent = "Buscar usuario";
btnBuscarUsuario.style.marginLeft = "10px";

// seccion vacia donde se mostrara el resultado
const resultadoGithub = document.createElement("div");
resultadoGithub.style.marginTop = "15px";

formularioGithub.appendChild(inputUsuario);
formularioGithub.appendChild(btnBuscarUsuario);




/* getElementById
getelementbyclassname
getelementbytagname

querySelector
queryselectorall */

/* console.log(document.getElementById('padre'))
//me trae el elemento HTML

console.log(document.getElementsByClassName('variosDivs'));
//me trae un HTML COLLECTION

console.log(document.getElementsByTagName('button'));
//me trae un HTML COLLECTION


console.log(document.querySelector('#cambiarColor #padre'));
//me trae el elemento HTML

console.log(document.querySelector('#cambiarColor .variosDivs'));
//me trae el elemento HTML

console.log(document.querySelectorAll('.variosDivs')); */

//cambia de color el body
const cambiandoColor = () => {
  let bodySeleccionado = document.getElementById("cambiarColor");

  const contenidoBoton = document.body.querySelector("button");

  if (bodySeleccionado.classList.contains("light")) {
    bodySeleccionado.classList.add("dark");
    bodySeleccionado.classList.remove("light");

    contenidoBoton.textContent = "Negro";
  } else if (bodySeleccionado.classList.contains("dark")) {
    bodySeleccionado.classList.add("light");
    bodySeleccionado.classList.remove("dark");

    contenidoBoton.textContent = "Beige";
  }
};

//agrego nuevo elemento
const agregarElemento = () => {
  const padre = document.getElementById("padre");

  const elemento = document.createElement("p");

  elemento.textContent = "Hola soy el nuevo parrafo";

  padre.appendChild(elemento);
};

//elimino elemento
const eliminarElemento = () => {
  const padre = document.getElementById("padre");

  const hijoAeliminar = document.querySelector("p");

  padre.removeChild(hijoAeliminar);
};

//onclick
const escuchador = () => {
  console.log("escuchando utilizando onclick");
};

//addeventlistener
function escuchoEventos() {
  console.log("escuchando desde addeventlistener");
}

const escuchandoEvento = document.getElementById("boton3");
escuchandoEvento.addEventListener("click", escuchoEventos);



//mouseover
// se dispara cuando entra en el elemento

/* const miElemento = document.getElementById('texto-usuario');
 */
  /*   miElemento.addEventListener("mouseover", () => {
    document.querySelector('textarea').placeholder = "El cursor del mouse entró en el elemento"
  });

// se dispara cuando se sale del elemento
miElemento.addEventListener("mouseout", () => {
  document.querySelector('textarea').placeholder = "El cursor del mouse salio del elemento"
}); 

miElemento.addEventListener("mousemove", () => {
  document.querySelector('textarea').placeholder = "El cursor se mueve dentro del elemento"
}); */



//keydown
/*  document.addEventListener('keydown', function(event) {
  alert('estas presionando teclas')
  console.log(`La tecla presionada fue: ${event.key}`);
  console.log(event)
  
}); */

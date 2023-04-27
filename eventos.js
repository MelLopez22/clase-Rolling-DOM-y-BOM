/* ............................................................ 

clase 26-04

eventos y localStorage */


//estamos creando publicaciones
const publicar = ()=>{
//seleccionar nuestro padre
//seleccionar el valor de lo que se ingresa en el text area
//creamos el p, le insertamos texto
//agregamos al padre el p hijo

const contenedor = document.querySelector('#publicaciones');

const textoUsuario = document.querySelector('#texto-usuario').value;

const elemento = document.createElement('p')

elemento.textContent = textoUsuario;

contenedor.appendChild(elemento)


document.querySelector('#texto-usuario').value = '';


}


document.querySelector('#botonSubmit').addEventListener('click', (event)=>{
    event.preventDefault()
    publicar()
})

//EVENTOS
//funcion nombrada
function metodoTrad () {
    console.log('cliqueando boton 1')
}
const boton1 = document.querySelector('#metodoTradicional')

boton1.addEventListener('click', metodoTrad)

//ARROW FUNCTION
const otroBoton = document.getElementById('otromETODO');
otroBoton.addEventListener('click', ()=>{
console.log('cliqueando el boton 2')
})

//-------------doble click
const dobleClick = ()=>{
    console.log('cliqueaste dos veces')

}

 // se dispara cuando entra en el elemento
const miElemento = document.querySelector('textarea')
 miElemento.addEventListener("mouseover", () => {

    miElemento.placeholder = 'el mouse entro al elemento'
    
  });

// se dispara cuando se sale del elemento
miElemento.addEventListener("mouseout", () => {
    miElemento.placeholder = 'el mouse salio del elemento'
  });



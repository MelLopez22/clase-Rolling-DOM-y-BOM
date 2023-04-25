alert('soy el dom')

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






//buton que cambia de color mi pagina
//seleccionar mi body
//preguntar si hay una clase clara donde el fondo sea claro quiero cambiar a negro
//y visceversa si hay una clase negra quiero que el fondo ahora sea claro
//esto tiene que ocurrir cada vez que yo apreto un boton
const cambiandoColor = () => {

    let bodySeleccionado = document.getElementById("cambiarColor");
  
    const contenidoBoton = document.body.querySelector('button')
  
    if (bodySeleccionado.classList.contains("light")) {
      bodySeleccionado.classList.add("dark");
      bodySeleccionado.classList.remove("light");
  
      contenidoBoton.textContent = 'Negro'
  
    } else if (bodySeleccionado.classList.contains("dark")) {
      bodySeleccionado.classList.add("light");
      bodySeleccionado.classList.remove("dark");
  
      contenidoBoton.textContent = 'Beige'
  
     
    }
  };
  
  const agregarElemento = ()=>{
    const padre = document.getElementById('padre')
  
    const elemento = document.createElement('p')
  
    elemento.textContent = 'Hola soy el nuevo parrafo'
  
    padre.appendChild(elemento)
  
  }


  const eliminarElemento = ()=>{
    const padre = document.getElementById('padre')

    const hijoAeliminar = document.querySelector('p') 

    padre.removeChild(hijoAeliminar)

  }



  const escuchador = ()=>{
console.log('escuchando utilizando onclick')
  }

  function escuchoEventos (){
    console.log('escuchando desde addeventlistener');
  }

  document.getElementById('boton3').addEventListener('click', escuchoEventos)
obtenerLS()

function obtenerLS() {



    let unObjeto = JSON.parse(localStorage.getItem('objeto'));
    let unTexto = localStorage.getItem('texto');
  
    console.log(unObjeto);
    console.log(unTexto);
  
    // Crear un nuevo div
    const nuevoDiv = document.createElement('div');
  
    // Crear un nuevo elemento p para el texto y añadirlo al div
    const textoP = document.createElement('p');
    textoP.textContent = unTexto;
    nuevoDiv.appendChild(textoP);
  
    // Recorrer el objeto y crear elementos p para las claves y valores
    for (const clave in unObjeto) {
      let valor = unObjeto[clave];
      let parrafo = document.createElement('p');
      parrafo.textContent = `${clave}: ${valor}`;
      nuevoDiv.appendChild(parrafo);
    }
  
    // Añadir el div al cuerpo del documento
    document.body.appendChild(nuevoDiv);
  }
  
//----------------------------


//creo y guardo informacion en mi localstorage
function guardandoLS (){
    let persona = {
        nombre:'Mel',
        apellido:'Lopez',
        edad:33
    }

    let texto = 'saludos desde localStorage';

    localStorage.setItem('objeto', JSON.stringify(persona) )
    localStorage.setItem('texto', texto)
}
guardandoLS()








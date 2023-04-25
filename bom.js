
//LEER
/* window.alert("soy el bom"); */


//LEER 
//el valor de prompt es lo que se ingresa en el campo
/* const valorPrompt = prompt('Escribe algo')
document.body.textContent = `el valor de prompt es : ${valorPrompt}` */

//LEER
/* console.log(window.location.href);
console.log(window.location);  */




//mostramos como manipular las propiedades de window y redigir a una nueva pagina
/* console.log(window.location.href);
 if(window.location.protocol === 'http:'){
        alert('pagina segura')
    }else{
        alert('pagina no segura')
        window.location.href = 'https://google.com/'
    }  */




//mostramos como manipular las propiedades de window y recargar la pagina con location reload
/*  if(window.location.protocol === 'http:'){
    alert('recargar pagina')
    document.body.textContent = 'recargando pagina ...'
    window.location.reload()
}else{
    document.write('seguimos en la misma pagina')
    location.reload()
}  */




//metodo confirm de window
/* if (confirm("¿Está seguro que desea eliminar este elemento?")) {
     
   document.body.innerHTML = 'producto eliminado'
  } else {
    document.body.textContent = 'no se elimino el producto'
}
console.log(document.body); */





//Manejo de tiempo setTimeout
/* const cargaDemorada = () => {
  setTimeout(() => {
    alert("hola me demore 3 segundos");
  }, 3000);
};

 cargaDemorada() */




//Manejo de tiempo setInterval
/* setInterval(() => {
    console.log('me ejecuto cada 1 segundo')
}, 1000); */



 








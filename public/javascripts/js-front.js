// let titulo = document.querySelector('h1');
// titulo.innerHTML += ' Esto es un contenido nuevo desde JavaScript'
// console.log(titulo.innerHTML);

// //agregando html con innerHTML
// let parrafoEspecial = document.querySelector('.parrafo-especial');
// parrafoEspecial.innerHTML = 'Un texto en <i> cursiva </i>' + '<input> </input>'
// console.log(parrafoEspecial);

// // cambiando estilos
// titulo.style.color = 'blue';
// titulo.style.fontSize = '54px';

// //cambiando estilos con confirm

// let confirmaCambios = confirm('¿Quieres cambiar el color del titulo');
// if (confirmaCambios) {
//   let subTitulo = document.querySelector('h2');
//   subTitulo.style.color = 'red';
//   subTitulo.style.fontSize = '54px'
// };

//modificando clases con el objeto classList
// let titulo3 = document.querySelector('h3');
// titulo3.classList.add('titulo-destacado')
// console.log(titulo3.classList);

// let confirmaEliminarClase = confirm('¿Quieres eleminar la clase?');
// if (confirmaEliminarClase) {
// titulo3.classList.remove('titulo-destacado')
// }

//modificando clases con toogle
let titulo3 = document.querySelector('h3');
titulo3.classList.toggle('titulo-destacado')
console.log(titulo3.classList)

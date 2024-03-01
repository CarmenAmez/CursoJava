//Obtener un número aleatorio entre 5 y 7.
const max = 7;
const min = 5;
const nRandom = Math.floor( Math.random() * (max - min +1)) + min;
console.log(nRandom);

//Declaramos una constante con nuestro nombre. Calculamos un número aleatorio en un rango comprendido entre 0 y el número de letras de tu nombre.
//Utilizamos ese número aleatorio para obtener la letra de tu nombre que ocupa esa posición. Mostramos la letra en la consola.
const nombre = 'carmen';
const mox = nombre.length;
const mun= 0;
const nAleatorio = Math.floor(Math.random() * (mox - mun + 1)) + mun;
console.log(nAleatorio);
console.log(nombre[nAleatorio]);

//Obtener el nombre de la página actual.

const url = location.href;
const lastSlash = url.lastIndexOf('/')
const page = url.substring(lastSlash)

console.log(page);
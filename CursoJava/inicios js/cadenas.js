//Escribe una función llamada longitud que reciba como parámetro de entrada una cadena de texto y devuelva el número de letras que tiene.
const longuitud = 'Esternocleidomastoideo';
console.log("La palabra tiene " + longuitud.length + " letras");

//Escribe una función llamada devuelvePrimeraLetra que reciba como parámetro de entrada una cadena de texto y devuelva la primera letra.
const devuelvePrimeraLetra = 'Esternocleidomastoideo';
console.log("La primera letra de la palabra es: " + devuelvePrimeraLetra.charAt(0));

//Escribe una función llamada devuelveUltimaLetra que reciba como parámetro de entrada una cadena de texto y devuelva la última letra.
const devuelveUltimaLetra = 'Esternocleidomastoideo';
console.log("La primera letra de la palabra es: " + devuelvePrimeraLetra.charAt(21));

//Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una cadena de texto y un número y 
//devuelva la letra que ocupe la posición indicada por el número.
const devuelveEnesimaLetra = 'Esternocleidomastoideo';
console.log("La primera letra de la palabra es: " + devuelveEnesimaLetra[9]);

//Utilizando el método substring imprimir las letras que van desde la posición 3 a la 7 de la cadena «wonderful day», es decir “derf”.
const devuelveEstasLetra = 'Esternocleidomastoideo';
console.log("Las letras que van desde la tercera hasta la septima posición son: " + devuelveEstasLetra.substring(3, 7));

//Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto y devuelva la más larga.
// En caso de que ambas cadenas sean igual de largas, devolveremos la correspondiente al primer parámetro de la función.
const devuelveMasLarga = (palabra1, palabra2) => palabra1.length >= palabra2.length ? palabra1 : palabra2;
const devuelveAlgo = devuelveMasLarga('Esternocleidomastoideo', 'Supercalifragilisticuespialidoso')
console.log(devuelveAlgo);
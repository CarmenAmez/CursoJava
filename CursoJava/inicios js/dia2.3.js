//Modificar SÓLO EL OPERADOR BOOLEANO para lograr que se imprima el mensaje.
const dato1 = 10;
const dato2 = 10;
if(dato1 === dato2){
	console.log('exito');
}

//Corrige los errores
if (10 === 10){
    console.log('You got a true!')
} else {
    console.log('You got a false!')
}
//Dada una constante que contiene la nota de un examen que va de 0 a 10…
//Si es mayor que cinco mostrar el texto «Aprobado».
//Si es igual a cinco, mostrar el texto «Aprobado por los pelos»
//Si es menor que cinco, mostrar el texto «Suspenso».
const exm = 8;
if (exm > 5) {
    console.log('Aprobado')
} else if (exm ==5) {
    console.log('Aprobado por los pelos')
} else {
    console.log('Suspenso')
}
//Declara una constante ‘i’ de tipo entero y asígnale un valor. Mostrar un mensaje indicando si el valor de ‘i’ es positivo o negativo,
//si es par o impar, si es múltiplo de 5, si es múltiplo de 10 y si es mayor o menor que 100. Consideraremos el 0 como positivo.
const i =15;
if (i > 0) {
    console.log('Positivo')
} else {
    console.log('Negativo')
}
if ( i%2 === 0) {
    console.log('Par')
} else {
    console.log('Impar')
}
if ( i%5 === 0) {
    console.log('Multiplo de 5')
} else {
    console.log('No multiplo de 5')
}
if ( i%10 === 0) {
    console.log('Multiplo de 10')
} else {
    console.log('No multiplo de 10')
}
if ( i > 100) {
    console.log('Mayor que 100')
} else {
    console.log('Menor que 100')
}

//Hacer una calculadora que determine la operación a realizar por medio de una estructura de control if.
//La calculadora utilizará 3 constantes para hacer los cálculos.
//Una constante que almacenará el primer número.
//Una constante que almacenará el segundo número. Por ejemplo:
//Una constante de tipo texto que almacenará la operación a realizar. Esta constante podrá valer +, -, * o /, 
//en función de la operación que deseamos realizar. Por ejemplo:
//Utilizaremos la estructura de control if para evaluar la constante que almacena la operación a realizar y en función de esa evaluación,
//hacer una suma, una resta, una multiplicación o una división.
const n1 = 3;
const n2 = 7;
const op = '+';
if(op === '+') {
    console.log( n1+n2)
} else if (op === '-') {
    console.log( n1-n2) 
} else if (op === '/'){
    console.log(n1/n2)
} else {
    console.log( n1*n2)
}
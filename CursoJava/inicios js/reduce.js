/**1.Dado el siguiente array de datos: [1,2,3]. 
Calcular el valor medio utilizando la instrucción reduce. */

const numbers = [1, 2, 3];

const valorMedio = numbers.reduce ((acc, numbers) => acc + numbers)/numbers.length;
console.log(valorMedio)
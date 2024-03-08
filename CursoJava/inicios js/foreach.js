//1.Crear un array con cinco nombres de persona y recórrelo mostrando el texto «Conozco a alguien llamado.
/*const nombres = ['Anna', 'Diego', 'Andrea','Fernando'];
for (let i = 0; i < nombres.length; i++) {
    console.log('Conozco a alguien llamado ' + nombres[i]);
}*/

const nombre = ['Carlos', 'Alberto', 'Carmen', 'Lucia'];
nombre.forEach(nombres => console.log('Conozco a alguien llamdo ' + nombres));

//2.Recorrer la siguiente lista con un bucle foreach imprimiendo el doble de cada número.
/*const numbers = [1,9,3,8,5,7];
let lista =0;
for(let i=0; i<numbers.length; i++){
    lista = numbers[i] *2;
    console.log(lista);
}*/
const number = [1,9,3,8,5,7];
number.forEach(numbers=> console.log(numbers * 2))
/*//3.Contar el número de elementos positivos, negativos y que valgan cero en un array de 10 enteros.
// Los valores habrán sido harcodeados en un array. La salida por consola debería ser similar a esta:
const nums = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let positivos = 0;
let negativos = 0;
let ninguno = 0;
for (let i=0; i<nums.length; i++){
    if (nums[i] > 0){
        positivos++;
    } else if (nums[i]< 0){
        negativos++;
    } else {
        ninguno++;
    }
}*/
const numr = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];

let positivos = 0;
let negativos = 0;
let ninguno = 0;

numr.forEach(numrs => {
    if (numrs > 0){
        positivos++;
    } else if ( numrs < 0){
        negativos++;
    } else {
        ninguno++;
    }
});

console.log('Números positivos es: ' + positivos);
console.log('Números negativos es: ' + negativos);
console.log('Números cero es: ' + ninguno);

/*//4.const number = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
let positiveSum = 0;
let positiveCount = 0;
let negativeSum = 0;
let negativeCount = 0;
for (let i = 0; i < number.length; i++) {
	if (number[i] > 0) {
		positiveSum += number[i];
		positiveCount++;
	} else if (number[i] < 0) {
		negativeSum += number[i];
		negativeCount++;
	}
}*/
const nume = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let positiveSum = 0;
let positiveCount = 0;
let negativeSum = 0;
let negativeCount = 0;

nume.forEach(numes =>{
    if (numes > 0) {
		positiveSum += numes;
		positiveCount++;
	} else if (numes < 0) {
		negativeSum += numes;
		negativeCount++;
	}
})

console.log ('La media de los números positivos es: ' + positiveSum / positiveCount);
console.log ('La media de los números negativos es: ' + negativeSum/negativeCount);

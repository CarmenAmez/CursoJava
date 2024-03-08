//1.Crea un array con cinco nombres de persona y recórrelo con un bucle for mostrando el texto «Conozco a alguien llamado «.
const nombres = ['Anna', 'Diego', 'Andrea','Fernando'];
for (let i = 0; i < nombres.length; i++) {
    console.log('Conozco a alguien llamado ' + nombres[i]);
}

//2.Crea una función toArray que reciba dos valores y devuelva un array con estos dos valores.
const toArray = (x,y) => {
    const newArray =[];
    newArray[0]= x;
    newArray[1]=y;
    return newArray
}

const valores = toArray(5,9);
console.log(valores)

//3.Recorrer la siguiente lista con un bucle imprimiendo el doble de cada número:
const numbers = [1,9,3,8,5,7];
let lista =0;
for(let i=0; i<numbers.length; i++){
    lista = numbers[i] *2;
    console.log(lista);
}

//4. Escribe una función llamada getFirstElement que reciba un array y devuelva el primer elemento.
const getFirstElement = (arr) => arr[0];

const z = getFirstElement ([1,2,3,4,5])
console.log(z); 

//5.Escribe una función llamada setFirstElement que reciba como parámetro de entrada un array y un valor cualquiera. 
//El valor recibido debería reemplazar lo que haya en la primera posición del array. El array debería ser devuelto.
const setFirstElement = (rray, a) => {
    rray[0] = a;
    return rray;
}

const r = setFirstElement([1,2,3], 4);
console.log(r)

//6.Escribe una función getLastElement que reciba un array como parámetro de entrada y devuelva el último elemento del array.
const getLastElement = (ary) => {
    return ary[ary.length - 1];
} 

const p = getLastElement ([1,2,3,4])
console.log(p);

//7.Contar el número de elementos positivos, negativos y que valgan cero en un array de 10 enteros.
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
}

console.log('Cantidad de numeros positivos: ' + positivos)
console.log('Cantidad de números negaticos: ' + negativos)
console.log('Cantidad de números cero: ' + ninguno)

//8.Leer 10 enteros harcodeados en un array y mostrar la media de los valores negativos y la de los positivos.
const number = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];

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
}

console.log ('La media de los números positivos es: ' + positiveSum / positiveCount);
console.log ('La media de los números negativos es: ' + negativeSum/negativeCount)


//9. Selecciona un elemento del array arr de tal forma que una variable que debes declarar llamada myData sea igual a 8.
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
    ];
    const myData = arr[2][1];
    console.log(myData);

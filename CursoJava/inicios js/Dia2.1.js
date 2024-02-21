//1. Declara una constante llamada txt1 que contenga el texto «Este es el principio».
//2. Declara otra constante llamada txt2 que contenga el texto «Este es el final».
//3. Declara otra constante llamada txt3 que contenga la concatenación de ambas cadenas, colocando un espacio en blanco entre medias.
//4. Muestra en un console.log el resultado de la concatenación.
const text1 = "Este es el principio.";
const text2 = "Este es el final";
const text3 = text1 + ' ' + text2;
console.log(text3);

//Hacer un conversor de euros a dólares. Tendremos una constante llamada euros en la que el valor estará inicializado con valor 7.
//Debemos calcular ese valor en dólares. Supondremos que un euro son dos dólares.
const euros = 7;
const dolares = euros * 2;
console.log(dolares);

//El IVA para ciertos artículos es del 21%.
//Realiza un programa que a partir de una constante precio inicializada con valor 100, calcule el precio con IVA.
const precio = 100;
const precioConIva = precio * 1.21;
console.log(precioConIva);

//Realiza un programa que a partir de los valores constantes, ancho=4 y alto=7, calcule el área de un rectángulo.
// Recuerda que el area de un rectángulo es ancho por alto.
const ancho = 4;
const alto = 7;
const area = ancho * alto / 2;
console.log(area);

//Hacer un conversor de grados centígrados a grados Fahrenheit. Para ello deberé multiplicar los grados centígrados por 9/5 y sumar 32.
//Para comprobar que hemos hecho los cálculos correctamente,
// partiremos de una constante llamada centigrados que valdrá 20. En este caso, los grados fahrenheit deberían ser 68.
const centigrados = 20;
const fahrenheit = centigrados * (9/5) + 32;
console.log(fahrenheit);

//Vamos a mandar al usuario la caja de sus sueños. Para ello, partiremos de los siguientes valores:
//y los concatenaremos para obtener por consola el siguiente mensaje:
//«[nombre] ha pedido una caja de [material] con unas dimensiones [dimensiones]. [comentario].
//El anterior mensaje, una vez montado, debería haber quedado así:
//Juan ha pedido una caja de Madera con unas dimensiones diminutas. Que sea muy bonita, pero de una belleza extraña, indómita.
const nombre = 'Juan';
const material = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza estraña, indómita';
console.log(nombre + ' ha pedido una caja de ' + material + ' con unas dimensiones ' + dimensiones + '. Que sea muy bonita, pero de una belleza extraña, indómita.')
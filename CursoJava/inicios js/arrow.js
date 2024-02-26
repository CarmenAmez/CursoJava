//Crear y llamar a una función flecha que recibe un número y muestre su cubo con un console.log
const cubo = (a) => a*3;

const valor = cubo (4);
console.log('4 al cubo es ' + valor);


//Crear y llamar a una función flecha que recibe la velocidad en Km/hora y la devuelva en en metros/hora. 
const velocidad = (km) => km*1000;

const metros = velocidad (3);
console.log('3k/m es ' +  metros + 'm/h');


//Crea y llamar a una función flecha que recibe el ancho y el alto de un rectángulo y devuelva su área.
const rectangulo = (m, n) => m*n*2;

const area = rectangulo (4, 7);
console.log(area + ' es el area del Rectángulo');


//Crear y llamar a una función flecha que recibe la base y la altura de un triángulo y devuelva su área.
const triangulo = (l,p) => l*p/2;

const result = triangulo (6,8);
console.log(result + ' es el area del Triangulo');


//Crear estas dos funciones flecha: Perímetro de la circunferencia = 2*Math.PI*radio;
const circulo = (t) => 2*Math.PI*t;

const perimetro = circulo (9);
console.log(perimetro);


//Área de la circunferencia = Math.PI*radio*radio.
const circunferencia = (g) => Math.PI*g*g;

const areCircunferencia = circunferencia (14);
console.log(areCircunferencia);

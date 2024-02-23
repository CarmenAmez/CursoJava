//Crear y llamar a una función que reciba como parámetro de entrada un valor booleano y 
//muestre «Sí, eso es cierto» si el valor es true, y «No, eso es falso» si el valor es false.
function valor (booleano){
    console.log( booleano ? 'Sí, es cierto.' : 'No, es falso.')
}
valor(false);

//Crear una función llamada «hoyQuieroComer» que recibe un parámetro “comida” cuyo valor será «garbanzos».
//Cuando llamemos a la función se mostrará un log indicándonos lo que deseamos comer.

function hoyQuieroComer(comida){
    console.log( 'Hoy quiero comer ' + comida)
}
hoyQuieroComer('Garbanzos');

//Crear una función llamada calcularCubo que recibe un número, calcule su cubo y muestre el resultado por consola.
// Llamar a la función pasándole el valor 3.
function calcularCubo(numero){
    console.log('3 al cubo es ' + numero * numero * numero)
}
calcularCubo(3);

//Crear una función llamada calcularVelocidad que recibirá la velocidad en Km/hora y la mostrará en metros/hora.
function calcularVelocidad(metros){
    console.log('3 km/h es igual a ' + metros*1000 +' m/h')
}
calcularVelocidad(3)

//Crear una función llamada calcularArea que recibirá el ancho y el alto de un rectángulo y calculará su area.
//Cuando una función recibe varios parámetros, estos irán separados por coma.
function calcularArea(alto, ancho){
    console.log('El area de un rectángulo es '+ alto*ancho)
}
calcularArea(14, 46)

//Crear y llamar a una función que recibe la base y la altura de un triángulo y calcula su área.
function calcularTriangulo (base, altura){
    console.log('El area de un triangulo es ' + base*altura/2)
}
calcularTriangulo(18, 29)

//Crear estas dos funciones: calculaPerimetro(radio); Perímetro de la circunferencia = 2*Math.PI*radio
//calculaArea(radio); Area de la circunferencia = Math.PI*radio2
function calculaPerimetro(radio){
    console.log('El perimetros de esta circunferencia es ' + 2*Math.PI*radio)
}
calculaPerimetro(36)

function calcularcircuferencia (rad){
    console.log('La circunferencia es ' + Math.PI*rad*rad)
}
calcularcircuferencia(23)

//Declare una constante numérica ‘b’ y asignale un valor. Mostrar una traza indicando si el valor de ‘b’ es positivo o negativo.
//Consideraremos el 0 como positivo. Utiliza el operador condicional (? : ) dentro del console.log para resolverlo.
/*const b = 27;
const posi = 0;
console.log(b>posi ? '27 es mayor que 0.' : '0 es mayor que 27.');

//Declarar una constante numérica ‘i’ y asignale un valor. Muestra un mensaje indicando si ‘i’ es par o impar.
//Utiliza el operador condicional ( ? : ) dentro del console.log para resolverlo.
const i = 38;
console.log(i%2===0 ? '38 es un número par.' : '38 es un número impar.');*/

//Inserta el código necesario para que esta estructura de control Switch funcione también con el amarillo.
const color = 'amarillo';
switch(color) {
	case 'rojo':
		console.log('Has escogido rojo');
	break;
	case 'azul':
		console.log('Has escogido azul');
	break;
    case 'amarillo':
        console.log('Has escogido amarillo');
    break;
	default:
		console.log('No has escogido ningún color de la lista!');
}

const golosina = 'nubes';

switch(golosina) {
	case 'chicle':
		console.log('Has escogido un chicle');
	break;
	case 'gominola':
		console.log('Has escogido una gominola');
	break;
	case 'regaliz':
		console.log('Has escogido un regaliz');
	break;
	default:
        console.log('Has escogido las ' + golosina)
}
const n1 = Number(prompt("Introduce un número, por favor:"));
const n2 = Number(prompt("Introduce un número, por favor:"));
const r = prompt('Introduce la operación matematica:')

let resultado;
if (r === '+'){
    resultado = n1+n2;
} else if ( r === '-'){
    resultado = n1-n2;
} else if (r === '*'){
    resultado = n1*n2;
} else if (r === '/'){
    resultado = n1/n2;
}

alert(resultado)

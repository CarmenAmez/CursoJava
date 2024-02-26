//Escribe una función nand que tome como parámetros de entrada dos valores booleanos. Si ambos valores son true, debería devolver false.
// En cualquier otro caso, debería devolver true.
//Por ejemplo, la llamada nand(true, true); debería devolver false.
//Las llamadas: nand(true, false); nand(false, true); nand(false, false); deberían devolver true.
function nand (a,b){
    return !(a && b);
}

const x = nand (true, true)
console.log(x);

//Escribe una función nor que tome como parámetros de entrada dos valores booleanos. 
//Si ambos valores son false, debería devolver true. En cualquier otro caso, el valor devuelto debería ser false.
//Por ejemplo, la llamada a la función, nor(false, false); debería devolver true.
//Las llamadas: nor(true, false); nor(false, true); nor(true, true); deberían devolver false.

function nor (c, d){
    return (!c && !d);
}

const q = nor(false, false);
console.log(q);

//Escribe una función xor que tome dos valores booleanos. Si ambos valores son diferentes, debería devolver true.
//Si ambos valores son iguales, debería devolver false. Por ejemplo, las llamadas: xor(true, false); xor(false, true); deberían devolver true.
//Ver código fuente; Ver explicación; Las llamadas: xor(true, true); xor(false, false);deberían devolver false.
function xor(e, f){
    return (e !== f);
}

const w = xor(true, true);
console.log(w)

//Escribe una función echo que devuelva el valor que recibe como parámetro. echo("Greta");debería devolver «Greta» y
//echo("CO2");debería devolver «CO2».
function deVolver (echo){
    return echo;
}
const echo = deVolver ('Greta');
console.log(echo)

//Escribe una función saludar que reciba un parámetro y devuelva el texto «Hola <parametro>!»Por ejemplo, saludar("Ada");
//Debería devolver «Hola Ada!» saludar("Grace"); Debería devolver «Hola Grace!»
function saluDos (name){
    return 'Hola!'+ name;
}
const q = saluDos (' Grace')
console.log(q)

//Modificar la siguiente función para que devuelva Inside si val está entre 10 y 20 inclusive y Outside en caso contrario.
function test(val) {
	if (val >= 10 && val <= 20) {
		return "Inside";
	}else {
		return "Outside";
	}
}
const x = test(19);
console.log(x);

//Añade el operador de igual para que la siguiente función devuelva Equal cuando val sea 12.
function testEqual(val) {
	if (val === 12) { // Cambia esta línea
		return "Equal";
	}
	return "Not Equal";
}
const w = testEqual (12)
console.log(w);

//Combina las sentencias if en un único bloque de tipo if/else.
function testElse(val) {
	let result = "";
	if (val > 5) {
		result = "Mayor que 5";
	}
	else {
		result = "Menor o igual a 5";
	}
	return result;
}
const e = testElse (9);
console.log(e);

//Combina las sentencias en un único bloque de tipo if/elseif/else.
function testIfElse(val) {
	let result = "";

	if (val > 5) {
		result = "Bigger than 5";
	} else if (val < 5) {
	result = "Smaller than 5";
	} else {
		result = "Equal to 5";
	}
	return result;
}

const r = testIfElse (9);
console.log(r);

//Completar la función para que se cumplan las siguientes condiciones:num < 5 → return "Tiny"; num < 10 → return "Small"; num < 15 → return "Medium";
//num < 20 → return "Large"; num >= 20 → return "Huge";

function testSize(num) {
    let result = "";

    if (num < 5){
        result = 'Tiny';
    } else if (num < 10){
        result = 'Small';
    } else if (num < 15) {
        result = 'Medium';
    } else if (num < 20) {
        result = 'Large';
    } else {
        result = 'Huge';
    }
    return result;
}

const t = testSize (43);
console.log(t)

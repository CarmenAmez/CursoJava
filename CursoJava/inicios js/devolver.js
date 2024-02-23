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
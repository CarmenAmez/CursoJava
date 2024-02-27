//13.Hacer una función crearPalabra que reciba como parámetro de entrada una letra y un número y genere una nueva palabra que tenga
//la letra introducida repetida tantas veces como indique el número. Completar el ejercicio haciendo que en la nueva palabra generada
//las letras esten en mayúsculas.
const crearPalabra = (letra, number) =>{
    let palabra = '';
    for (let i=0; i<number; i++) {
        palabra += letra.toUpperCase ();
    }
    console.log(palabra);
}
crearPalabra ('dalia, ', 8);


//15.Hacer una función addGuiones que reciba como parámetro de entrada una cadena texto y
//devuelva una nueva cadena que tendrá un guion medio detrás de cada letra. Utilizar para ello un bucle for.
const addGuiones = (text) => {
    let palabraGenerada = '';
    for (let i = 0; i < text.length; i++) {
        const letra = text[i];
        palabraGenerada += letra + '-';
    }
    return palabraGenerada;
}

const nuevaPalabra = addGuiones('Me duele la barriga');
console.log(nuevaPalabra);

//16.Hacer una función contadorDeLetras que reciba como parámetro de entrada una cadena de texto y una letra y 
//devuelva el número de veces que esa letra esta presente en la palabra. Utilizar para ello un bucle for.
const contadorDeLetras = (txt, word) =>{
    let contadorDeLetras = '0';
    for(let i = 0; i< txt.length; i++){
        if (txt[i].toUpperCase() === word.toUpperCase()) contadorDeLetras++;
    }
    return contadorDeLetras;
}
const cantidadLetra = contadorDeLetras ('Aluminio', 'a');
console.log(cantidadLetra);

//18.Hacer una función contadorDeLetras2 que reciba como parámetro de entrada dos cadenas de texto y una letra y
//devuelva la cadena de texto en la que dicha letra esta más presente. Utilizar para ello un bucle for. No tener en cuenta si 
//la letra pasada como parámetro esta en mayúsculas o minúsculas.
const contadorDeLetras2 = (string1, string2, letter) => {
    let contadorLetras1 = 0;
    let contadorLetras2 = 0;

    for (let i = 0; i < string1.length; i++) {
        if (string1[i].toUpperCase() === letter.toUpperCase()) contadorLetras1++
    }

    for (let i = 0; i < string1.length; i++) {
        if (string2[i].toUpperCase() === letter.toUpperCase()) contadorLetras2++
    }

    if (contadorLetras1 > contadorLetras2) return string1;
    else if (contadorLetras2 > contadorLetras1) return string2;
    else return 'son iguales';
}


const palabraMasLarga = contadorDeLetras2('amapola', 'amarillo', 'o');
console.log(palabraMasLarga);

//19.
const toCase = (low) => {
    return low.toLowerCase() + '-' + low.toUpperCase();
}

const palabras = toCase('Patito');
console.log(palabras);

//20.Escribe una función llamada shortcut que tome dos cadenas de texto y devuelva la inicial de cada una de las dos cadenas.
const shortCut = (text1, text2) =>{
    return text1[0] + text2[0]
}

const mon = shortCut('Tulipán', 'Soñar')
console.log(mon);

//21.
const showSomething = (text3,) =>{
        return text3.trim()[0];
}

const pap = showSomething (' Lavadoras ');
console.log(pap);

//22.
const indexOfIgnoreCase = (text4, text5) => {
    return text4.toUpperCase().indexOf(text5.toUpperCase());
}

const mor = indexOfIgnoreCase ( 'bit', 'it');
console.log(mor);

//23.
const firstWord = (text6) =>{
    const whiteSpacePos = text6.indexOf(' ');
    const result = text6.substring(0, whiteSpacePos);
    return result;
}

const fw = firstWord ('lula pa lusa')
console.log(fw)
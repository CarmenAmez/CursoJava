//7.Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la más larga. 
//En caso de que al menos dos cadenas tengan igual longitud, devolveremos el texto Hay al menos dos cadenas iguales.
const devuelveMasLarga2 = (palabra1, palabra2, palabra3) => {
    if (palabra1.length > palabra2.length && palabra3.length){
        return palabra1;
    } else if (palabra2.length > palabra1.length && palabra3.length){
        return palabra2;
    } else{
        return palabra3;
    }
} 

const see = devuelveMasLarga2 ('Esternocleidomastoideo','Supercalifragilisticuespialidoso','hola');
console.log(see);


//8.Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto. 
//Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. 
//Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres primeras letras de cada palabra.
const generarNombre = (text1, text2, text3) =>{
    if (text1.length, text2.length, text3.length < 5){
        return 'error';
    } else{
        return text1.substring(0,1) + text2.substring(0,1) + text3.substring(0,1);
    }
}

const pop = generarNombre ('Mandarina', 'Aluminio','Lavadora');
console.log(pop);

//9.Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas de texto.
//Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’.
//Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando la última letra de cada palabra.
const generarNombre2 = (text4, text5, text6) =>{
    if (text4.length, text5.length, text6.length < 5){
        return 'error';
    } else{
        return text4.slice(-1) + text5.slice(-1) + text6.slice(-1);
    }
}

const pap = generarNombre2 ('Mandarinas', 'Aluminio','Lavadoras');
console.log(pap);

//10.Hacer una función generarNombre3 que reciba como parámetros de entrada tres cadenas de texto.
//Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’.
//Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres últimas letras de cada palabra.
const generarNombre3 = (text7, text8, text9) =>{
    if (text7.length, text8.length, text9.length < 5){
        return 'error';
    } else{
        return text7.slice(-3) + text8.slice(-3) + text9.slice(-3);
    }
}

const pip = generarNombre3 ('Mandarinas', 'Aluminio','Lavadoras');
console.log(pip);

//11.Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y devuelva true si 
//la letra esta presente en la palabra y false si no lo esta. Utilizar para ello el método indexOf.
const tieneLetra = (name) =>{
    if ( name.indexOf("a") >= 0){
        return true
    } else {
        return false
    }
}

const ver = tieneLetra('Amapola')
console.log(ver);
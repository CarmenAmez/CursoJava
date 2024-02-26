//Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la más larga. 
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


//Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto. 
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
console.log(pop)
let usurario = false;

const hasNumber = (myString) => /\d/.test(myString)
while(usurario){
    const nomUsuario = prompt('Introduzca su nombre:')
    if(!hasNumber(nomUsuario)){
        const real = prompt('El nombre no contiene ningún número. ¿Seguro es tu nombre? Si/No')
        if( real === 'si'){
            usurario = true;
            alert('Perfecto. Seguimos con el proceso.')
        } else {
            alert('Introduzca el nombre real.')
        }
    } else {
        alert('El nombre introducido contiene un número. ')
    }
}


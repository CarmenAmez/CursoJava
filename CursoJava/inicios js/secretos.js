const rNumber = Math.floor(Math.random() * 10) + 1;
let jugando = true;
let attempts = 0;
while (jugando) {
    const userNumber = Number(prompt('Introduce un número:'));
    if (userNumber === rNumber) {
        alert('¡Ganaste!');
        attempts = false;
    } else if ( rNumber < 5){
        alert('Ese no era! l número es menor a 5.')
    } else if ( rNumber > 5){
        alert('Ese no era. El número es mayor a 5 ')
    } else {
        attempts++;
        if (attempts === 3) {
            jugando = false;
            alert('¡Has Perdido! El número era: ' + rNumber);
        }
    }
}

alert('Juego Finalizado');
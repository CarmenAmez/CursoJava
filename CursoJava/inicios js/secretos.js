const rNumber = Math.floor(Math.random() * 10) + 1;
let jugando = true;
let attempts = 0;
while (jugando) {
    const userNumber = Number(prompt('Introduce un número:'));
    if (userNumber === rNumber) {
        alert('¡Ganaste!');
        attempts = false;
    } else {
        attempts++;
        if (attempts === 3) {
            jugando = false;
            alert('¡Has Perdido! El número era: ' + rNumber);
        }
    }
}

alert('Juego Finalizado');
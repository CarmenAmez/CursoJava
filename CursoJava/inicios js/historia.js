const rNumber = Math.floor(Math.random() * 2) + 1;
let jugando = true
while (jugando){
    const doorNumber = Number(prompt('Entras en una mazmorra en la que hay dos puertas. Puerta nº1 y Puerta nº2. Tras una de ellas, se encuentra una muerte segura. ¿Cuál escoges?:'));
    if (doorNumber === rNumber) {
        alert('¡Has sobrevivido! La suerte ha estado de tu lado.');
    } else {
        alert('¡Te has caido por un precipicio! Has muero Mejor suerte la próxima vez.'+ 'La Puerta era: ' + rNumber);
        jugando = false;
    }
}
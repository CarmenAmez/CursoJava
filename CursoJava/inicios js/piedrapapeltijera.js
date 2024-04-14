const opciones = ['piedra', 'papel', 'tijera'];

getRandomOption = () => {
    const ramdon = Math.floor(Math.random() * opciones.length);
    return opciones[ramdon];
}

const comprobarSolucion = (value) => {
const option = opciones[value];
const randomOption = getRandomOption();
console.log(`El jugador ha seleccionado: ${option}`);
console.log(`La computadora ha seleccionado: ${randomOption}`);

const ramdonImg = document.querySelector('.ramdon img')
ramdonImg.setAttribute('src', `./style/img/assets/${randomOption}.jpeg`)

if (option === randomOption) {
    alert(`Empate! Ambos han seleccionado ${option}`);
} else if ((option === 'piedra' && randomOption === 'tijera') ||
            (option === 'papel' && randomOption === 'piedra') ||
            (option === 'tijera' && randomOption === 'papel')) {
    alert(`¡Ganaste! ${option} gana a ${randomOption}`);
} else {
    alert(`¡Perdiste! ${randomOption} gana a ${option}`);
}

setTimeout(() => {
    location.reload();
}, 3000);
}

document.querySelectorAll('.container button').forEach((button) => {
button.onclick = () => comprobarSolucion(button.value);
});
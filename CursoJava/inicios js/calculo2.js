const randomNumber = Math.floor(Math.random() * 5) + 1;
alert(randomNumber);
const userNumber = Number(prompt('Introduce un número, por favor:'));


if (userNumber === randomNumber) {
    alert('¡Son iguales!');
} else {
    alert('¡No son iguales!');
}
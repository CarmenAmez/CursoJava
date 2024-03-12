const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}

const words = ['javascript', 'funcion', 'constante', 'bucle'];
const secretWord = words[Math.floor(Math.random() * words.length)];

let underscoreWord = secretWord.replace(/./g, "_ ");
let win = false;

while (!win) {
    alert(underscoreWord)
    const putLetter = prompt('Escriba una letra');
    let foundLetter = false;
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === putLetter) {
            underscoreWord = replaceAt(underscoreWord, putLetter, i*2);
            foundLetter = true;
        }
    }if (underscoreWord.indexOf("_") == -1) {
        alert('Has ganado!' + ' Efectivamente era: ' + ' ' + secretWord);
        win = true;
    } if (!foundLetter) {
        alert("Has fallado");
    }
}
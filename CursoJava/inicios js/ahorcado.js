const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}

const words = ['javascript', 'funcion', 'constante', 'bucle'];
const secretWords = words[Math.floor(Math.random() * words.length)];

let underscoreWord = secretWords.replace(/./g, "_ ");
let win = false;

while (!win) {
    alert(underscoreWord)
    const putWord = prompt('Escriba una letra');
    let foundWord = false;
    for (let i = 0; i < secretWords.length; i++) {
        if (secretWords[i] === putWord) {
            underscoreWord = replaceAt(underscoreWord, putWord, i*2);
            foundWord = true;
        }
    }if (underscoreWord.indexOf("_") == -1) {
        alert('Has ganado!' + ' Efectivamente era: ' + ' ' + secretWords);
        win = true;
    } if (!foundWord) {
        alert("Has fallado");
    }
}
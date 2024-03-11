const board = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];

// Funcion para mostrar el tablero
const printBoard = () => {
    alert(board[0] + "|" + board[1] + "|" + board[2] + "\n" + board[3] + "|" + board[4] + "|" + board[5] + "\n" + board[6] + "|" + board[7] + "|" + board[8]);
}
//Funcion para comprobar si el jugador ha ganado.
const checkIfPlayerWon = (board) => {
    if (board[0] === board[2] && board[1] === board[2] && board[2] !== '_') {
        return true
    } else if (board[3] === board[5] && board[4] === board[5] && board[5] !== '_') {
        return true
    } else if (board[6] === board[8] && board[7] === board[8] && board[8] !== '_') {
        return true
    } else if (board[0] === board[6] && board[3] === board[6] && board[6] !== '_') {
        return true
    } else if (board[1] === board[7] && board[4] === board[7] && board[7] !== '_') {
        return true
    } else if (board[2] === board[8] && board[5] === board[8] && board[8] !== '_') {
        return true
    } else if (board[0] === board[8] && board[4] === board[8] && board[8] !== '_') {
        return true
    } else if (board[2] === board[6] && board[4] === board[6] && board[6] !== '_') {
        return true
    } else {
        return false
    }
}

const checkIfTable = (board) => {
    if (
        board[0] !== '_' &&
        board[1] !== '_' &&
        board[2] !== '_' &&
        board[3] !== '_' &&
        board[4] !== '_' &&
        board[5] !== '_' &&
        board[6] !== '_' &&
        board[7] !== '_' &&
        board[8] !== '_'
    ) {
        return true
    } else {
        return false
    }
}

//Funcion para colocar la pieza
const setPiece = (board, piece) => {
    let checkPosition = false
    //Bucle para comprobar que la posición está libre.
    while (!checkPosition) {
        let position = prompt('Introduce un número de 1 al 9: ') - 1;
        if (board[position] === '_') {
            board[position] = piece;
            checkPosition = true
        } else {
            alert('Posición ocupada! Escoja otro número!')
        }
    }
}
//Instancio las variables del juego 
let isPlayer1 = true;
let gameOver = false

printBoard();

//Lógica del juego.
while (!gameOver) {
    let player = isPlayer1 ? 'X' : 'O';
    alert('Turno del jugador ' + player)
    setPiece(board, player);
    printBoard();
    gameOver = checkIfPlayerWon(board);
    if (gameOver) {
        alert('Ha ganado el Jugador ' + player + ' ¡Enhorabuena!')
    } else {
        isPlayer1 = !isPlayer1;
        gameOver = checkIfTable(board)
        if (gameOver) {
            alert('El juego acaba en Empate!')
        }
    }
}

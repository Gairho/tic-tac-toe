let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function makeMove(cellIndex) {
    if (!gameBoard[cellIndex]) {
        gameBoard[cellIndex] = currentPlayer;
        document.getElementById('game-board').children[cellIndex].innerText = currentPlayer;
        if (checkWin(currentPlayer)) {
            document.getElementById('status-message').innerText = `${currentPlayer} wins!`;
            return;
        }
        if (gameBoard.every(cell => cell !== '')) {
            document.getElementById('status-message').innerText = "It's a draw!";
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin(player) {
    return winningCombos.some(combo => {
        return combo.every(index => gameBoard[index] === player);
    });
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    document.getElementById('status-message').innerText = '';
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}

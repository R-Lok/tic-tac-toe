// Make sure display restart to player turn when restart btn pressed after game over
// add tie game over detection (all board slots filled)
// add turndisplay change for when game ends in tie

const gameBoard = (function(){
    let board = ["", "", "", "", "", "", "", "", ""]
    const boardSlots = document.querySelectorAll(".boardslot")
    boardSlots.forEach(node => node.addEventListener('click', updateBoardArray))
    const turnDisplay = document.querySelector(".turn-display")
    const restartBtn = document.querySelector(".restart-game")
    restartBtn.addEventListener('click', startNewGame)
    gameBoardActive = true

    function updateBoardArray(e) {
        let boardSlot = e.target.getAttribute('position')
        if (gameBoardActive === true) {
            if (board[boardSlot -1] !== "") {
                alert('Slot already taken!')
            } else {
                board[boardSlot - 1] = gameController.getWhosTurn()
                renderGameboard()
                gameController.updatePlayerPositions(boardSlot)
                endTurn()
            }      
        } else {
            return
        }
          
    }

    function renderGameboard() {
        for (i = 0; i < board.length; i++) {
            boardSlots[i].innerText = board[i]
        }
    }

    function endTurn() {
        if (gameController.checkGameOver() === true) {
            gameOver()
        } else {
            gameController.changeTurn()
        }
    }

    function gameOver() {
        turnDisplay.innerText = `Game over! Player ${gameController.getWhosTurn()} is the winner!`
        gameBoardActive = false
    }

    function startNewGame(){
        clearBoard()
        gameController.resetGame()
        gameBoardActive = true
    }

    function clearBoard() {
        boardSlots.forEach(node => node.innerText = "")
        board = board.map(slot => slot = "")
    }

    return {turnDisplay}
})()

const gameController = (function() {
    let playerX = player('X')
    let playerO = player('O')
    let whosTurn = playerX

    function changeTurn() {
        if (whosTurn === playerX) {
            whosTurn = playerO
        } else {
            whosTurn = playerX
        }
        gameBoard.turnDisplay.innerText = `Player ${whosTurn.sign}'s turn`
    }

    function getWhosTurn() {
        return whosTurn.sign
    }

    function updatePlayerPositions(boardslot) {
        if (whosTurn === playerX) {
            playerX.positions.push(boardslot)
        } else {
            playerO.positions.push(boardslot)
        }
    }

    function checkGameOver() {
        let winConditions = [['1', '2', '3'],
                             ['4', '5', '6'],
                             ['7', '8', '9'], 
                             ['1', '4', '7'], 
                             ['2', '5', '8'], 
                             ['3', '6', '9'], 
                             ['1', '5', '9'], 
                             ['3', '5', '7']]
        gameOver = false

        for (i = 0; i < winConditions.length; i++) {
            if (winConditions[i].every(position => whosTurn.positions.includes(position))) {
                gameOver = true
                break 
            }
        }
        return gameOver
    }

    function resetPlayers() {
        playerX = player('X')
        playerO = player('O')
    }

    function resetGame() {
        resetPlayers()
        changeTurn()
    }

    return {changeTurn, getWhosTurn, updatePlayerPositions, checkGameOver, resetGame}
})()

function player(sign) {
    let positions = []
    return {sign, positions}
}
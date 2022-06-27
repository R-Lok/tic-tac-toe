const gameBoard = (function(){
    let board = ["", "", "", "", "", "", "", "", ""]
    const boardSlots = document.querySelectorAll(".boardslot")
    boardSlots.forEach(node => node.addEventListener('click', updateBoardArray))

    function updateBoardArray(e) {
        let boardSlot = e.target.getAttribute('position')

        if (board[boardSlot -1] !== "") {
            alert('Slot already taken!')
        } else {
            board[boardSlot - 1] = gameController.getWhosTurn()
            renderGameboard()
            gameController.updatePlayerPositions(boardSlot)
            gameController.checkGameOver()
            gameController.changeTurn()
        }        
    }

    function renderGameboard() {
        for (i = 0; i < board.length; i++) {
            boardSlots[i].innerText = board[i]
        }
    }
    return {}
})()

const gameController = (function() {
    const playerX = player('X')
    const playerO = player('O')
    let whosTurn = playerX

    function changeTurn() {
        if (whosTurn === playerX) {
            whosTurn = playerO
        } else {
            whosTurn = playerX
        }
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
                let gameOver = true
                break 
            }
        }
        
    }

    return {changeTurn, getWhosTurn, updatePlayerPositions, checkGameOver}
})()

function player(sign) {
    let positions = []
    return {sign, positions}
}
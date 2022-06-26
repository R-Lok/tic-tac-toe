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
    let whosTurn = 'X'

    function changeTurn() {
        if (whosTurn === 'X') {
            whosTurn = 'O'
        } else {
            whosTurn = 'X'
        }
    }

    function getWhosTurn() {
        return whosTurn
    }

    return {changeTurn, getWhosTurn}
})()

function player(sign) {
    this.sign = sign
    getSign = () => {
        return this.sign
    }
    return {getSign}
}
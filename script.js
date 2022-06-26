const gameBoard = (function(){
    let board = ["", "", "", "", "", "", "", "", ""]
    const boardSlots = document.querySelectorAll(".boardslot")

    return {}
})()

const gameController = (function() {
    const playerX = player('x')
    const playerO = player('o')
    let whosTurn = 'X'

    function changeTurn() {
        if (whosTurn = 'X') {
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
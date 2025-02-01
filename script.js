console.log("Welcome to the tic tac toe")
// to insert music
// let music = new Audio("music_path")
// // let turn = new Audio("music_path")
// let gameover = new Audio("music_path")
// initial turn in the game
let turn = "X"
let isgameover = false;

// function to change the player
const changeTurn = () => {
    return turn === 'X' ? '0' : 'X'
}

// const changeturn = () => {
//     return turn === "X" ? "0" : "X"
// }

// function for win
const gameWin = () => {
    let boxtext = document.getElementsByClassName("boxText")
    let winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]            // Diagonals
    ]
    winningCombos.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won"
            isgameover = true
        }
    })


}

// Game logic
//  addin the onclick listener to the boxes(event listener)
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            gameWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }

        }
    })
})

let resetBut = document.querySelector("#resetBut")
let cells = Array.from(document.querySelectorAll(".cell"))
let boxes = Array(9).fill(null)
let resultText = document.querySelector(".result-text")


const iconO = "O"
const iconX = "X"
let currentPlayer = iconX

function gameStart() {
    cells.forEach(e => e.addEventListener("click", function(g) {
        console.log(g.target)
        const idSelected = g.target.id

        if(!boxes[idSelected]) {
            boxes[idSelected] = currentPlayer
            g.target.innerText = currentPlayer

            currentPlayer = currentPlayer == iconX ? iconO : iconX
        }
    }))
}

resetBut.addEventListener("click", function() {
    boxes.full(null)

    cells.forEach(e => {
        e.innerText = ""
    })

    currentPlayer = iconX
})

gameStart()